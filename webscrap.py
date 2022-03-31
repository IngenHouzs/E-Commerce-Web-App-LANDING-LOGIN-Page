import re
from bs4 import BeautifulSoup
import requests

URL = "https://www.lediknas.com/provinsi-kabupaten-dan-kota-di-indonesia/"

page = requests.get(URL)

bs_obj = BeautifulSoup(page.text, "html.parser")

outer = bs_obj.find_all('ol')

with open("domisili.txt", "w") as domisili_file:
    for i in outer:
        lists = i.find_all('li')
        for j in lists: 
            if "Daftar" not in j.text:
                domisili_file.write(j.text + "\n")