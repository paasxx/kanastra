# Use a imagem oficial do Python como base
FROM python:3.9


# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

COPY requirements.txt .

# Instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copia os arquivos do projeto para o contêiner
COPY kanastra/ /app

# Abre a porta 8000 para acessar o servidor Django
EXPOSE 8000

########################################################################################################
##### Fique ciente que se o docker do banco de dados não estiver funcional essas etapas abaixo falharão, 
##### então talvez seja melhor rodar pelo container depois de subir

# # Comando para fazer as migrações
# RUN python manage.py makemigrations

# # Comando para aplicar as migrações
# RUN python manage.py migrate

# # Comando para iniciar o servidor Django
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

########################################################################################################

# Dummy command to keep the container running
CMD ["tail", "-f", "/dev/null"]
