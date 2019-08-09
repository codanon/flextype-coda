<?php

declare(strict_types=1);

/**
 * Flextype (http://flextype.org)
 * Founded by Sergey Romanenko and maintained Flextype Community.
 *
 * @license https://github.com/flextype/flextype/blob/master/LICENSE.txt (MIT License)
 */

namespace Flextype;

use Flextype\Component\I18n\I18n;
use Twig_Extension;
use Twig_SimpleFunction;

class I18nTwigExtension extends Twig_Extension
{
    /**
     * Returns a list of functions to add to the existing list.
     *
     * @return array
     */
    public function getFunctions() : array
    {
        return [
            new Twig_SimpleFunction('tr', [$this, 'tr']),
        ];
    }

    /**
     * Translate string
     */
    public function tr(string $translate, ?string $locale = null, array $values = []) : string
    {
        return I18n::find($translate, $locale, $values);
    }
}
