# Projeto final NFT 


## Descrição do Projeto
Bem-vindo ao EDU, a plataforma educacional  revolucionária criada especialmente para estudantes e recém-formados em tecnologia. Aqui, você pode compartilhar seus projetos, interagir com outros estudantes e ganhar TOKENS valiosos a cada meta cumprida.
No EDU, a busca pelo conhecimento é recompensada! À medida que você avança e conquista novos desafios, acumula pontos e sobe de nível. Cada nível alcançado é uma conquista que merece ser celebrada e reconhecida.
Mas as recompensas não param por aí. A cada nível alcançado, o EDU oferece uma NFT (Token Não Fungível) personalizada, que é um símbolo exclusivo do seu progresso e sucesso. Além disso, você terá acesso a uma série de benefícios exclusivos, como revisão de currículo, mentoria com profissionais experientes, cursos especializados, cupons de desconto e muito mais!
Imagine a sensação de ter um currículo impecável, com orientação personalizada de especialistas na área, e a oportunidade de expandir seus conhecimentos através de cursos especializados. No EDU, estamos comprometidos em impulsionar o seu crescimento profissional e garantir que você se destaque na multidão.
Aprender e compartilhar projetos com outros estudantes também é uma parte fundamental da experiência no EDU. Nossa comunidade vibrante e engajada está pronta para colaborar, trocar ideias e oferecer suporte mútuo. Juntos, podemos construir um ecossistema de aprendizado inspirador, onde o conhecimento é valorizado e recompensado.
Não espere mais para começar a sua jornada no EDU. Inscreva-se agora mesmo e comece a trilhar o caminho para o sucesso na área de tecnologia. Seja reconhecido, aprenda com os melhores e abra portas para um futuro brilhante.
EDU - Aprendizado, Reconhecimento e Oportunidades Ilimitadas!
## Apresentação do projeto : [Slides](https://docs.google.com/presentation/d/19Q6XQzn6g0WPEJQdSRgPYdDrNTDEHOXh/edit#slide=id.p1) 
  
     EDU - Plataforma Educacional
          
                |
                |   
                |   
       ----------------
      |                |
      |                |
     🎓             🚀
   Recém-Formados    Estudantes
                  
                  de Tecnologia
                |
                
                |
                
                |
                
                |
                
                |
       ---------------
      |               |
      |               |
  🏆  Meta Cumprida   🌟
     (Ganho de TOKENS) 
                |
                
                |
                
                |
                
                |
       ---------------
      |               |
      |               |
   📈 Pontos        🎉
 (Acúmulo e Níveis)  Conquistas
                |
                
                |
                
                |
                
                |
       ---------------
      |               |
      |               |
    🖼️ NFT          🎁
 (Personalizada)   Benefícios
                |
                
                |
                
                |
                
                |
                
                |
       ---------------
      |               |
      |               |
  💼 Revisão       🎓
  de Currículo   Mentoria
                |
                
                | 
                
                |
                
                |
       ---------------
      |               |
      |               |
    📚 Cursos       💰
  Especializados   Cupons


# Arquitetura do projeto





![arquitetura do projeto](https://github.com/GabyySoares/Projeto-final./assets/97314635/a1bc13ff-6958-4980-9425-d2f23e196db2)

Durante o desenvolvimento do Projeto EDU, foram utilizadas as seguintes tecnologias:

HTML: Utilizado para estruturar o conteúdo e os elementos da aplicação web.
CSS: Utilizado para estilizar e dar vida à interface do EDU, tornando-a atraente e intuitiva para os usuários.
JavaScript: Utilizado para adicionar funcionalidades interativas, manipular dados e tornar a experiência do usuário mais dinâmica.
Solidity: Utilizado para desenvolver contratos inteligentes na blockchain, permitindo a interação com tokens e a execução de transações seguras e confiáveis.
ReactJS: Utilizado como framework para construção do front-end, possibilitando a criação de componentes reutilizáveis e uma interface mais escalável.

Antes de utilizar nossa aplicação, certifique-se de ter as seguintes ferramentas instaladas em seu computador:

Node.js: Ambiente de execução JavaScript utilizado para rodar a aplicação e suas dependências.
Ganache: Uma blockchain local que simula o funcionamento de uma rede Ethereum, permitindo o desenvolvimento e teste de contratos inteligentes.
Metamask: Extensão de navegador que atua como uma carteira digital e permite a interação com a blockchain Ethereum.
Hardhat: Um framework para desenvolvimento de smart contracts que facilita a compilação, implantação e teste dos contratos na rede.


## Testando a aplicação

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
Ao explorar este repositório, você terá acesso a uma série de commits antigos, que refletem o aprendizado e a evolução do projeto. Revisar esses commits proporcionará uma visão abrangente dos desafios enfrentados e das soluções encontradas ao longo do processo.
Ficamos felizes em compartilhar esse trabalho consolidado e esperamos que seja uma inspiração para outros desenvolvedores. Sinta-se à vontade para explorar, aprender com o código e contribuir com novas ideias, sugestões e melhorias.
Agradecemos por visitar nosso repositório do Projeto EDU - Demonstração de Conhecimento. Sua participação é valiosa para nós e estamos empolgados para ver como suas habilidades e conhecimentos se aplicarão neste projeto.
Vamos juntos nessa jornada de aprendizado e aprimoramento contínuo. Divirta-se explorando o código e aproveite as possibilidades oferecidas pelo EDU!

