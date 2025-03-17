# Use nginx image with brotli support
FROM --platform=linux/amd64 fholzer/nginx-brotli:latest

# Copy the static files to nginx html directory
COPY application/_site /usr/share/nginx/html

# Copy a custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80