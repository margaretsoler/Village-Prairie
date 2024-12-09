FROM node:18.20.4

WORKDIR /app

# Copy entrypoint.sh and set executable permissions
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Add application code
ADD . .

# Install dependencies
RUN npm install

# Debugging step: list contents of root
RUN ls -l /

# Set the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

# Default command
CMD ["npm", "run", "dev"]

EXPOSE 3000
