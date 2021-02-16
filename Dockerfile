FROM node:12

COPY . .
RUN yarn

CMD bash -c 'yarn run start'