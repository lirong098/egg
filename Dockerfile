FROM daocloud.io/node:8.9.0

ENV LANG C.UTF-8
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone

RUN mkdir -p /demo
COPY demo /demo
WORKDIR /demo

RUN npm install

EXPOSE 7001
CMD [ "npm", "start" ]