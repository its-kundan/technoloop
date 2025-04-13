# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the built files using Nginx
FROM nginx:alpine

# Copy the build output from the build stage to Nginx's web root
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]