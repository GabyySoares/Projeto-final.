

## DESCRICAO da Ideia
Bem-vindo ao EDU, a plataforma educacional  revolucionária criada especialmente para estudantes e recém-formados em tecnologia. Aqui, você pode compartilhar seus projetos, interagir com outros estudantes e ganhar TOKENS valiosos a cada meta cumprida.
No EDU, a busca pelo conhecimento é recompensada! À medida que você avança e conquista novos desafios, acumula pontos e sobe de nível. Cada nível alcançado é uma conquista que merece ser celebrada e reconhecida.
Mas as recompensas não param por aí. A cada nível alcançado, o EDU oferece uma NFT (Token Não Fungível) personalizada, que é um símbolo exclusivo do seu progresso e sucesso. Além disso, você terá acesso a uma série de benefícios exclusivos, como revisão de currículo, mentoria com profissionais experientes, cursos especializados, cupons de desconto e muito mais!
Imagine a sensação de ter um currículo impecável, com orientação personalizada de especialistas na área, e a oportunidade de expandir seus conhecimentos através de cursos especializados. No EDU, estamos comprometidos em impulsionar o seu crescimento profissional e garantir que você se destaque na multidão.
Aprender e compartilhar projetos com outros estudantes também é uma parte fundamental da experiência no EDU. Nossa comunidade vibrante e engajada está pronta para colaborar, trocar ideias e oferecer suporte mútuo. Juntos, podemos construir um ecossistema de aprendizado inspirador, onde o conhecimento é valorizado e recompensado.
Não espere mais para começar a sua jornada no EDU. Inscreva-se agora mesmo e comece a trilhar o caminho para o sucesso na área de tecnologia. Seja reconhecido, aprenda com os melhores e abra portas para um futuro brilhante.
EDU - Aprendizado, Reconhecimento e Oportunidades Ilimitadas!
     
     EDU - Plataforma Educacional
          
                |
                |   
                |   
       ----------------
      |                |
      |                |
     🎓             🚀
   Recém-Formados    Estudantes
                      em Tecnologia
                |
                |
       ---------------
      |               |
      |               |
  🏆  Meta Cumprida   🌟
     (Ganho de TOKENS) 
                |
                |
       ---------------
      |               |
      |               |
   📈 Pontos        🎉
 (Acúmulo e Níveis)  Conquistas
                |
                |
       ---------------
      |               |
      |               |
    🖼️ NFT          🎁
 (Personalizada)   Benefícios
                |
                |
       ---------------
      |               |
      |               |
  💼 Revisão       🎓
  de Currículo   Mentoria
                |
                |
       ---------------
      |               |
      |               |
    📚 Cursos       💰
  Especializados   Cupons



























Para mostrar demonstrar todo conhecimento prévio, apenas revisando todos os antigos commits, pois foi muito aprendizado, e no fim, foi todo aplicado em apenas um projeto.


Tecnologias Utilizadas: <br>
    - HTML <br>
    - CSS <br>
    - Javascript <br>
    - Solidity <br>
    - ReactJS <br>

Para utilizarmos nossa aplicação, é necessário ter no computador: <br>
    - NodeJS <br>
    - Ganache ( Blockchain local ) <br>
    - Metamask ( Extensão do navegador ) <br> 
    - Hardhat ( Framework para desenvolvimento de smart contracts ) <br>

```shell
Começando a testar a aplicação. 
    - Abra o Ganache e crie um novo workspace, e clique em "Quickstart"
    - Abra o Metamask e clique em "Importar conta", e cole a chave privada do primeiro endereço do Ganache 
    - Copie o .demo.env -> .env e dentro dele altere as variaveis necessarias.
    - Exemplo 
    -BLOCKCHAIN_ADDRESS = 'HTTP://127.0.0.1:7545'
    -PRIVATE_KEY = 'private_key{aidjiojpn212hn32jbjkhv4huj2v}'
    -PUBLIC_KEY = 'public_key{2iugb15iu53vbgjhv13ujcv13yuf1yivbj}'
    -CONTRACT_ADDRESS = 'contract_address{12nlk32jkl13k2bj1kj12b4k2bj2k1j4b21kjb1n24l2nl}'
    -CONTRACT_ABI = [contract_abi]
    - Abra o terminal e digite:
    - $npx hardhat compile
    - Você deve obter a resposta:
    - Compiled 18 Solidity files successfully
    - Abra o terminal e digite: 
    - npx hardhat run .\scripts\deploy.js
    - Você deve obter a resposta: 
    - Contrato implantado no endereço: 0x678A1A6930Dd02977978f9977A135b1589bD5870
    - Este é o endereço do contrato, deve copialo e cola-lo no arquivo .env, na variavel CONTRACT_ADDRESS
    - Abra o terminal e digite: 
    - npm start-be
    - Você deve obter a resposta:
    - Server ON
    - npm start
    - Você deve obter a resposta: 
    -> badge-nft-project@1.0.0 start
    -> nodemon src/back-end/server.js
    -[nodemon] 2.0.22
    -[nodemon] to restart at any time, enter `rs`
    -[nodemon] watching path(s): *.*
    -[nodemon] watching extensions: js,mjs,json
    -[nodemon] starting `node src/back-end/server.js`
    -Server ON
    
    - Agora voce pode baixar a colecao do postman e importar para fazer requisicoes.
    -
```
