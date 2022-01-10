FROM nginx
COPY build /usr/share/nginx/build

# copia a pasta build para um diretorio criado com o nome build (criado aqui)


# Depois cria uma imagem (build) -> o build nao cria um container novo
#      docker build -t turma14/app .


# Cria container 
#         docker run -it turma14/app bash
# criar um container e acessá lo por bash

# acessa as informações de configurações através do comando 
#     cat /etc/nginx/conf.d/default.conf
#  copia 


# CRIA ARQUIVO default.conf
# copia e cola as informaçoes de configuração da imagem

# substitui (no arquivo default.conf)

#    location / {
#         root   /usr/share/nginx/html;
#         index  index.html index.htm;
#     }

# por 
#      location / {
#         root   /usr/share/nginx/build;
#         index  index.html index.htm;
#     }



# copiar as novas configurações implementadas

COPY default.conf /etc/nginx/conf.d/default.conf

# CRIAR UMA NOVA IMAGEM COM AS NOVAS CONFIGURAÇÔES
#     docker build -t turma14/app .

# atribuir porta (cria novo container com a porta desejada)
#       docker run -p 3001:80 turma14/app


# NOT WORKINGGG!!!