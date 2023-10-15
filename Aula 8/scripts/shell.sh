ls
cd Aula-GitHub-Actions
ls
sudo apt-get install mailutils
echo "Fim da instalacao"
echo "Pipeline executado!" | mail -s "a subject" ${EMAIL_LIST}