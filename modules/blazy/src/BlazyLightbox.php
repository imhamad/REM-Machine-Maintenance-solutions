<?php

namespace Drupal\blazy;

use Drupal\Component\Utility\Xss;
use Drupal\Component\Serialization\Json;
use Drupal\image\Entity\ImageStyle;

/**
 * Provides lightbox utilities.
 */
class BlazyLightbox {

  /**
   * Gets media switch elements: all lightboxes, not content, nor iframe.
   *
   * @param array $element
   *   The element being modified.
   */
  public static function build(array &$element = []) {
    $item       = $element['#item'];
    $settings   = &$element['#settings'];
    $type       = empty($settings['type']) ? 'image' : $settings['type'];
    $uri        = $settings['uri'];
    $switch     = $settings['media_switch'];
    $switch_css = str_replace('_', '-', $switch);

    // Provide relevant URL if it is a lightbox.
    $url_attributes = &$element['#url_attributes'];
    $url_attributes['class'][] = 'blazy__' . $switch_css . ' litebox';
    $url_attributes['data-' . $switch_css . '-trigger'] = TRUE;

    // If it is a video/audio, otherwise image to image.
    $gallery_id             = empty($settings['view_name']) ? 'blazy-' . $switch_css : ($settings['view_name'] . '-' . $settings['current_view_mode']);
    $settings['gallery_id'] = empty($settings['gallery_id']) ? $gallery_id : $settings['gallery_id'];
    $settings['box_url']    = file_create_url($uri);
    $settings['icon']       = empty($settings['icon']) ? ['#markup' => '<span class="media__icon media__icon--litebox"></span>'] : $settings['icon'];
    $settings['lightbox']   = $switch;
    $settings['box_width']  = isset($item->width) ? $item->width : (empty($settings['width']) ? NULL : $settings['width']);
    $settings['box_height'] = isset($item->height) ? $item->height : (empty($settings['height']) ? NULL : $settings['height']);

    $dimensions = ['width' => $settings['box_width'], 'height' => $settings['box_height']];
    if (!empty($settings['box_style'])) {
      $box_style = ImageStyle::load($settings['box_style']);
      $box_style->transformDimensions($dimensions, $uri);
      $settings['box_url'] = $box_style->buildUrl($uri);
    }

    // Allows custom work to override this without image style, such as
    // a combo of image, video, Instagram, Facebook, etc.
    if (empty($settings['_box_width'])) {
      $settings['box_width'] = $dimensions['width'];
      $settings['box_height'] = $dimensions['height'];
    }

    $json = [
      'type'   => $type,
      'width'  => $settings['box_width'],
      'height' => $settings['box_height'],
    ];

    // This allows PhotoSwipe with videos still swipable.
    if (!empty($settings['box_media_style'])) {
      $box_media_style = ImageStyle::load($settings['box_media_style']);
      $box_media_style->transformDimensions($dimensions, $uri);
      $settings['box_media_url'] = $box_media_style->buildUrl($uri);
    }

    if (!empty($settings['embed_url'])) {
      $json['scheme'] = $settings['scheme'];
      $json['width']  = 640;
      $json['height'] = 360;

      // Force autoplay for media URL on lightboxes, saving another click.
      $url = empty($settings['autoplay_url']) ? $settings['embed_url'] : $settings['autoplay_url'];

      // This allows PhotoSwipe with videos still swipable.
      if (!empty($settings['box_media_style'])) {
        $settings['box_url'] = $settings['box_media_url'];

        // Allows custom work to override this video size without image style.
        if (empty($settings['_box_width'])) {
          $settings['box_width']  = $dimensions['width'];
          $settings['box_height'] = $dimensions['height'];
        }

        $json['width']  = $settings['box_width'];
        $json['height'] = $settings['box_height'];
      }

      if ($switch == 'photobox') {
        $url_attributes['rel'] = 'video';
      }
    }
    else {
      $url = $settings['box_url'];
    }

    if ($switch == 'colorbox') {
      // @todo make Blazy Grid without Blazy Views fields support multiple
      // fields and entities as a gallery group, likely via a class at Views UI.
      // Must use consistent key for multiple entities, hence cannot use id.
      // We do not have option for this like colorbox, as it is only limited
      // to the known Blazy formatters, or Blazy Views style plugins for now.
      // The hustle is Colorbox uses rel on individual item to group, unlike
      // other lightbox library which provides a way to just use a container.
      $json['rel'] = $settings['gallery_id'];
    }

    $url_attributes['data-media'] = Json::encode($json);

    if (!empty($settings['box_caption'])) {
      $element['#captions']['lightbox'] = self::buildCaptions($item, $settings);
    }

    $element['#url'] = $url;
  }

  /**
   * Builds lightbox captions.
   *
   * @param object|mixed $item
   *   The \Drupal\image\Plugin\Field\FieldType\ImageItem item.
   * @param array $settings
   *   The settings to work with.
   *
   * @return array
   *   The renderable array of caption, or empty array.
   */
  public static function buildCaptions($item, array $settings = []) {
    $title   = empty($item->title) ? '' : $item->title;
    $alt     = empty($item->alt) ? '' : $item->alt;
    $delta   = empty($settings['delta']) ? 0 : $settings['delta'];
    $caption = '';

    switch ($settings['box_caption']) {
      case 'auto':
        $caption = $alt ?: $title;
        break;

      case 'alt':
        $caption = $alt;
        break;

      case 'title':
        $caption = $title;
        break;

      case 'alt_title':
      case 'title_alt':
        $alt     = $alt ? '<p>' . $alt . '</p>' : '';
        $title   = $title ? '<h2>' . $title . '</h2>' : '';
        $caption = $settings['box_caption'] == 'alt_title' ? $alt . $title : $title . $alt;
        break;

      case 'entity_title':
        $caption = ($entity = $item->getEntity()) ? $entity->label() : '';
        break;

      case 'custom':
        $caption = '';
        if (!empty($settings['box_caption_custom']) && ($entity = $item->getEntity())) {
          $options = ['clear' => TRUE];
          $caption = \Drupal::token()->replace($settings['box_caption_custom'], [$entity->getEntityTypeId() => $entity, 'file' => $item], $options);

          // Checks for multi-value text fields, and maps its delta to image.
          if (!empty($caption) && strpos($caption, ", <p>") !== FALSE) {
            $caption = str_replace(", <p>", '| <p>', $caption);
            $captions = explode("|", $caption);
            $caption = isset($captions[$delta]) ? $captions[$delta] : '';
          }
        }
        break;
    }

    return empty($caption) ? [] : ['#markup' => Xss::filter($caption, BlazyDefault::TAGS)];
  }

}
