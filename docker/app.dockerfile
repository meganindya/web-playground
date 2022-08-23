FROM node:lts

WORKDIR /app

# update npm
RUN npm i -g npm

# install typescript ts-node sass eslint prettier
RUN npm i -g typescript ts-node sass eslint prettier

# clear entrypoint 'node'
ENTRYPOINT [ ]

# open shell
CMD "bash"

EXPOSE 8000
