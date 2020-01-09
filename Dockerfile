FROM govtechsg/base-images:node8-8.11.3

COPY ./test2000.pdf /app
COPY ./http.js /app

EXPOSE 2000

ENTRYPOINT ["node", "http.js"]
