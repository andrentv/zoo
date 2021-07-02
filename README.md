Instalar Symfony:
symfony check:requirements
wget https://get.symfony.com/cli/installer -O - | bash
sudo mv /home/andre/.symfony/bin/symfony /usr/local/bin/symfony

Comandos:
symfony new <nome.project>
symfony check:req
symfony serve
symfony serve -d
symfony server:status
symfony serve:ca:install (uninstall) 
symfony server:stop
symfony serve --port=8080


sudo mv composer.phar /usr/local/bin/composer
php composer
composer check
php bin/console
php bin/console (nomes dos comandos do console ex.: debug:router)



Instalações:
sudo apt-get install php7.4-curl
composer upgrade
composer dump-autoload
composer require profiler --dev
composer require debug
composer require symfony/flex
composer require doctrine/annotations
composer require symfony/runtime
composer require symfony/twig-pack
composer require symfony/asset