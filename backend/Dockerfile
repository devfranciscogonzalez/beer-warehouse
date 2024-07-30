# Usar la imagen oficial de PHP con Apache
FROM php:8.1-apache

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Instalar las extensiones necesarias de PHP y herramientas del sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar los archivos de la aplicación
COPY . /var/www/html

# Asignar los permisos correctos a las carpetas de Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Actualizar Composer y asegurar que no hay errores de dependencias
RUN composer self-update && composer clear-cache

# Copiar el archivo de configuración de Apache
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

# Habilitar el módulo de reescritura de Apache
RUN a2enmod rewrite

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Apache
CMD ["apache2-foreground"]