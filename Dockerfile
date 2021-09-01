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

ARG PORT
ENV NODE_ENV="production"

COPY --from=builder /app /app
WORKDIR /app

EXPOSE $PORT

CMD ["npm", "start"]
