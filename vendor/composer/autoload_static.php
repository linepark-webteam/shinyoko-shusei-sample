<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite1a21a43e13a50298370b817c7dbe341
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite1a21a43e13a50298370b817c7dbe341::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite1a21a43e13a50298370b817c7dbe341::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite1a21a43e13a50298370b817c7dbe341::$classMap;

        }, null, ClassLoader::class);
    }
}
