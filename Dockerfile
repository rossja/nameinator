# builder
FROM bitnami/node:16 AS builder
LABEL MAINTAINER="Jason Ross <algorythm@gmail.com>"

ENV NODE_ENV="production"
COPY src /app
WORKDIR /app
RUN ["npm", "install"]


# production container
FROM bitnami/node:16-prod
LABEL MAINTAINER="Jason Ross <algorythm@gmail.com>"

ARG NAMEINATOR_APP_NAME
ARG NAMEINATOR_NODE_ENV
ARG NAMEINATOR_NODE_PORT

ENV BITNAMI_APP_NAME=$NAMEINATOR_APP_NAME
ENV NODE_ENV=$NAMEINATOR_NODE_ENV
ENV NODE_PORT=$NAMEINATOR_NODE_PORT

COPY --from=builder /app /app
WORKDIR /app

CMD ["npm", "start"]
