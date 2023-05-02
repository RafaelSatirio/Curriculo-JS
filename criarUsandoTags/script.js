let tags = [/*0*/'div', /*1*/'img', 'p', 'p', 'div','div','p','p','div','div','div','p','p','div','div','p','div','p','p','p','div','p','p','p','p','p','p','div','div','p']
let listaTags = []
let body = document.querySelector('body')

// criei as 3 tags: div, img e p
tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

listaTags[2].textContent = "Rafael Satirio dos Santos Ribeiro"
listaTags[3].textContent = "Data de Nascimento: 27/06/2005"
listaTags[6].textContent = "Telefone (11) 95132-8239"
listaTags[7].textContent = "Email rafaelsatirio@gmail.com"
listaTags[11].textContent = "Sobre Mim"
listaTags[12].textContent = "Minhas Habilidades"
listaTags[15].textContent = "Sou um programador apaixonado por tecnologia e com uma sólida experiência no desenvolvimento de software. Com habilidades técnicas avançadas e uma mente criativa, estou constantemente em busca de novos desafios e oportunidades para aprimorar minhas habilidades."
listaTags[16].textContent = "HTML  Avançado"
listaTags[17].textContent = "CSS   Intermediario"
listaTags[18].textContent = "PHP   Basico"
listaTags[19].textContent = "Idioma Português, Inglês e Espanhol"
listaTags[21].textContent = "Endereço Rua Capivara Silva,20 "
listaTags[22].textContent = "Site https://www.RafaelSatirio.com"
listaTags[23].textContent = "Experiência"
listaTags[24].textContent = "Desenvolvimento de um aplicativo móvel: liderou a equipe na criação de um aplicativo móvel para iOS e Android, que foi baixado mais de 50.000 vezes. O projeto incluiu o uso de Swift para iOS e Kotlin para Android."
listaTags[25].textContent = "Escolaridade"
listaTags[26].textContent = "Graduado em Desenvolvimento de Sistemas " 
listaTags[29].textContent = "Etec Cidade Tiradentes,São Paulo,SP" 
listaTags[1].src="https://img.freepik.com/fotos-premium/retrato-do-perfil-de-um-modelo-adulto-masculino-com-oculos-homem-de-negocios-vestindo-terno-preto-e-gravata-branca-e-camisa_246930-1948.jpg?w=2000"

// adicionei a div no DOM
body.appendChild(listaTags[0])
body.appendChild(listaTags[8])
body.appendChild(listaTags[13])
body.appendChild(listaTags[14])
body.appendChild(listaTags[20])

listaTags[0].classList.add('container')
listaTags[4].classList.add('container2')
listaTags[5].classList.add('container3')
listaTags[8].classList.add('container4')
listaTags[9].classList.add('container5')
listaTags[10].classList.add('container6')
listaTags[20].classList.add('container9')
listaTags[27].classList.add('container10')
listaTags[28].classList.add('container11')


// incluindo na div a tag img e a p

listaTags[13].appendChild(listaTags[0])
listaTags[13].appendChild(listaTags[8])
listaTags[14].appendChild(listaTags[0])
listaTags[14].appendChild(listaTags[8])

listaTags[0].appendChild(listaTags[4])
listaTags[0].appendChild(listaTags[5])
listaTags[4].appendChild(listaTags[1])
listaTags[5].appendChild(listaTags[2])
listaTags[5].appendChild(listaTags[3])
listaTags[5].appendChild(listaTags[6])
listaTags[5].appendChild(listaTags[7])
listaTags[5].appendChild(listaTags[19])
listaTags[5].appendChild(listaTags[21])
listaTags[5].appendChild(listaTags[22])
listaTags[8].appendChild(listaTags[9])
listaTags[8].appendChild(listaTags[10])
listaTags[9].appendChild(listaTags[11])
listaTags[9].appendChild(listaTags[15])
listaTags[10].appendChild(listaTags[12])
listaTags[10].appendChild(listaTags[16])
listaTags[10].appendChild(listaTags[17])
listaTags[10].appendChild(listaTags[18])
listaTags[20].appendChild(listaTags[23])
listaTags[20].appendChild(listaTags[24])
listaTags[20].appendChild(listaTags[25])
listaTags[20].appendChild(listaTags[26])
listaTags[20].appendChild(listaTags[27])
listaTags[20].appendChild(listaTags[28])
listaTags[27].appendChild(listaTags[23])
listaTags[27].appendChild(listaTags[24])
listaTags[28].appendChild(listaTags[25])
listaTags[28].appendChild(listaTags[26])
listaTags[28].appendChild(listaTags[29])



listaTags[1].classList.add('img')
listaTags[2].classList.add('texto')
listaTags[3].classList.add('texto')
listaTags[6].classList.add('texto')
listaTags[7].classList.add('texto')
listaTags[11].classList.add('texto')
listaTags[12].classList.add('texto')
listaTags[15].classList.add('texto')
listaTags[16].classList.add('texto')
listaTags[17].classList.add('texto')
listaTags[18].classList.add('texto')
listaTags[19].classList.add('texto')
listaTags[21].classList.add('texto')
listaTags[22].classList.add('texto')
listaTags[23].classList.add('texto')
listaTags[24].classList.add('texto')
listaTags[25].classList.add('texto')
listaTags[26].classList.add('texto')
listaTags[29].classList.add('texto')




/*
let body = document.querySelector('body')
let p = 
p.textContent = "Everson Bacelli"
body.appendChild(p)
*/


// método fabrica
function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}