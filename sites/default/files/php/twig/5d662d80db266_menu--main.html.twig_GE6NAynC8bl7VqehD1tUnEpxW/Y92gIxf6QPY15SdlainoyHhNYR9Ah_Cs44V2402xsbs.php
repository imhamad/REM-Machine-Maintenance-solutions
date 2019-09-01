<?php

/* themes/gavias_comely/templates/navigation/menu--main.html.twig */
class __TwigTemplate_529291e95b777c5fcd3fd23dcd7a60a998f51c0dfdefae2118e5cc64ca7e12b3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("spaceless" => 23, "import" => 24, "macro" => 32, "if" => 34, "for" => 41, "set" => 42);
        $filters = array("join" => 48, "without" => 62, "trim" => 65);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('spaceless', 'import', 'macro', 'if', 'for', 'set'),
                array('join', 'without', 'trim'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 21
        echo "
<div class=\"gva-navigation\">
  ";
        // line 23
        ob_start();
        // line 24
        $context["menus"] = $this;
        // line 25
        echo "
";
        // line 30
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["menus"]->getmenu_links(($context["items"] ?? null), ($context["attributes"] ?? null), 0)));
        echo "

";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        // line 81
        echo "</div>

";
    }

    // line 32
    public function getmenu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 33
            echo "  ";
            $context["menus"] = $this;
            // line 34
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 35
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    // line 36
                    echo "      <ul ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => "gva_menu gva_menu_main"), "method"), "html", null, true));
                    echo ">
      
    ";
                } else {
                    // line 39
                    echo "      <ul class=\"menu sub-menu\">
    ";
                }
                // line 41
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 42
                    echo "      ";
                    $context["class_mega_menu"] = "";
                    // line 43
                    echo "      ";
                    $context["class_columns"] = "";
                    // line 44
                    echo "      ";
                    if ((($this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "gva_layout", array()) == "menu-block") && (($context["menu_level"] ?? null) == 0))) {
                        // line 45
                        echo "        ";
                        $context["class_mega_menu"] = "gva-mega-menu mega-menu-block";
                        echo " 
      ";
                    } elseif ((($this->getAttribute($this->getAttribute(                    // line 46
$context["item"], "attributes", array()), "gva_layout", array()) == "menu-grid") && (($context["menu_level"] ?? null) == 0))) {
                        echo "   
        ";
                        // line 47
                        $context["class_mega_menu"] = "gva-mega-menu megamenu menu-grid";
                        echo " 
        ";
                        // line 48
                        $context["class_columns"] = twig_join_filter(array(0 => "menu-columns-", 1 => $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "gva_layout_columns", array())), "");
                        // line 49
                        echo "      ";
                    }
                    echo "    
      ";
                    // line 51
                    $context["classes"] = array(0 => "menu-item", 1 => (($this->getAttribute(                    // line 53
$context["item"], "is_expanded", array())) ? ("menu-item--expanded") : ("")), 2 => (($this->getAttribute(                    // line 54
$context["item"], "is_collapsed", array())) ? ("menu-item--collapsed") : ("")), 3 => (($this->getAttribute(                    // line 55
$context["item"], "in_active_trail", array())) ? ("menu-item--active-trail") : ("")), 4 => $this->getAttribute($this->getAttribute(                    // line 56
$context["item"], "attributes", array()), "gva_class", array()), 5 =>                     // line 57
($context["class_mega_menu"] ?? null), 6 =>                     // line 58
($context["class_columns"] ?? null));
                    // line 61
                    echo "      
        <li ";
                    // line 62
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "gva_icon", "gva_class", "gva_layout_columns", "gva_block", "gva_layout"), "html", null, true));
                    echo ">
          <a href=\"";
                    // line 63
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true));
                    echo "\">
            ";
                    // line 64
                    if (($this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "gva_icon", array()) != "")) {
                        echo "<i class=\"fa ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "gva_icon", array()), "html", null, true));
                        echo "\"></i>";
                    }
                    // line 65
                    echo "            ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter($this->getAttribute($context["item"], "title", array())), "html", null, true));
                    echo " ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "description", array()), "html", null, true));
                    echo "
            ";
                    // line 66
                    if (($this->getAttribute($context["item"], "below", array()) || (($this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "gva_layout", array()) == "menu-block") && (($context["menu_level"] ?? null) == 0)))) {
                        echo "<span class=\"icaret nav-plus fa fa-angle-down\"></span>";
                    }
                    // line 67
                    echo "            ";
                    if ($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "original_link", array()), "pluginDefinition", array()), "description", array())) {
                        // line 68
                        echo "              <span class=\"navigation__link-description\">";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "original_link", array()), "pluginDefinition", array()), "description", array()), "html", null, true));
                        echo "</span>
            ";
                    }
                    // line 70
                    echo "          </a>
          ";
                    // line 71
                    if ((($this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "gva_layout", array()) == "menu-block") && (($context["menu_level"] ?? null) == 0))) {
                        // line 72
                        echo "            <div class=\"sub-menu\">";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter($this->getAttribute($context["item"], "gva_block_content", array())), "html", null, true));
                        echo "</div>
          ";
                    }
                    // line 73
                    echo "  
          ";
                    // line 74
                    if ($this->getAttribute($context["item"], "below", array())) {
                        echo " ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["menus"]->getmenu_links($this->getAttribute($context["item"], "below", array()), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1))));
                    }
                    // line 75
                    echo "        </li>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 77
                echo "    </ul>
  ";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "themes/gavias_comely/templates/navigation/menu--main.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  205 => 77,  198 => 75,  193 => 74,  190 => 73,  184 => 72,  182 => 71,  179 => 70,  173 => 68,  170 => 67,  166 => 66,  159 => 65,  153 => 64,  149 => 63,  145 => 62,  142 => 61,  140 => 58,  139 => 57,  138 => 56,  137 => 55,  136 => 54,  135 => 53,  134 => 51,  129 => 49,  127 => 48,  123 => 47,  119 => 46,  114 => 45,  111 => 44,  108 => 43,  105 => 42,  100 => 41,  96 => 39,  89 => 36,  86 => 35,  83 => 34,  80 => 33,  66 => 32,  60 => 81,  54 => 30,  51 => 25,  49 => 24,  47 => 23,  43 => 21,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/gavias_comely/templates/navigation/menu--main.html.twig", "/home/remsaco/public_html/dev/themes/gavias_comely/templates/navigation/menu--main.html.twig");
    }
}
