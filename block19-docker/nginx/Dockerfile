FROM nginx:latest
# linha base(imagem base/imagem ja feita)

COPY index.html /usr/share/nginx/html
# copiar os arquivos da máquina (index.html)
# para dentro do container
# este endereço especifico (/usr/share/nginx/html):

# usar comandos para localizar a pasta (no terminal):
#         docker run -it nginx bash
# (ativa o modo iterativo para usar um terminal dentro do container)

#  run a ls
#        ls /etc/

# (normalmente os arquivos estao nesta pasta)
# mostra as configurações da imagem, e por esse comando 
# podemos observar que existe a pasta 'nginx'

# em 
#      /etc/nginx/conf.d
#      /etc/nginx/conf.d/default.conf
#    cat /etc/nginx/conf.d/default.conf (cat exibe no terminal)

# assim podemos assim podemos verificar as conf padrão da imagem
# e criar uma nova sobrescrevendo o index.html com o nosso arquivo

# apos abrir cat /etc/nginx/conf.d/default.conf na tela podemos observar 
#  importantes configurações como:

#    listen       80  (porta interna do container)

#     location / {
#         root   /usr/share/nginx/html;
#         index  index.html index.htm;
#     }
# raiz do diretório, pra onde é direcionado quando ta na rota /



# CRIAR IMAGEM
#      docker build -t 14bis/hello-world .(diretório onde o dockerfile está)
# assim se cria uma imagem em cima de outra imagem
# vai criando camadas 

#       docker image inspect nginx


#  COM ISSO A IMAGEM ESTA DOCKERIZADA

#  CRIAR CONTAINER A PARTIR DA NOVA IMAGEM:


executar a imagem com o bash 

    docker run -it 14bis/hello-world bash
  
     cat /etc/nginx/conf.d/default.conf
para ver em qual porta o a imagem é executada, neste caso 80

**** toda vez que roda um docker run imageTag CRIA UM CONTAINER NOVO