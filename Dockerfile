FROM node:18

# 必要な依xx存関係をインストール
RUN apt-get update && apt-get install -y 

WORKDIR /root/app
