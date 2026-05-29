FROM mcr.microsoft.com/playwright:v1.60.0-noble

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV BASE_URL=https://www.saucedemo.com
ENV VALID_USERNAME=standard_user
ENV VALID_PASSWORD=secret_sauce
ENV INVALID_USERNAME=locked_out_user
ENV INVALID_PASSWORD=wrong_password

CMD ["npx", "playwright", "test", "--project=chromium"]