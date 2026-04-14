#!/bin/bash

# 红楼梦阅读游戏部署脚本
# 使用方法: ./deploy.sh

# 配置变量 - 请根据实际情况修改
SERVER_USER="your_username"           # 服务器用户名
SERVER_HOST="your_server_ip"          # 服务器IP或域名
SERVER_PATH="/var/www/red-mansion-game"  # 服务器目标路径

echo "===== 开始部署红楼梦阅读游戏 ====="

# 1. 构建项目
echo "1. 构建项目..."
npm run build

if [ ! -d "dist" ]; then
    echo "错误: 构建失败，dist 目录不存在"
    exit 1
fi

echo "构建成功!"

# 2. 创建服务器目录（如果不存在）
echo "2. 检查服务器目录..."
ssh $SERVER_USER@$SERVER_HOST "mkdir -p $SERVER_PATH"

# 3. 上传文件到服务器
echo "3. 上传文件到服务器..."
rsync -avz --delete dist/ $SERVER_USER@$SERVER_HOST:$SERVER_PATH/dist/

echo "文件上传完成!"

# 4. 提示配置 nginx
echo ""
echo "===== 部署完成! ====="
echo ""
echo "请在服务器上配置 nginx:"
echo ""
echo "1. 创建配置文件 /etc/nginx/sites-available/red-mansion-game:"
echo ""
cat << 'NGINX_CONF'
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/red-mansion-game/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /assets {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
NGINX_CONF

echo ""
echo "2. 启用配置:"
echo "   sudo ln -s /etc/nginx/sites-available/red-mansion-game /etc/nginx/sites-enabled/"
echo ""
echo "3. 测试并重启 nginx:"
echo "   sudo nginx -t"
echo "   sudo nginx -s reload"
echo ""
echo "===== 访问 http://your-domain.com 即可使用 ====="