const axios = require('axios');
const baseUrl = 'http://localhost:8080/badge';

// CREATE
axios.post(baseUrl + "/", {
    // dados para criar
})
    .then(response => {
        console.log('Dados criados:', response.data);
    })
    .catch(error => {
        console.error('Erro ao criar dados:', error);
    });

// READ
axios.get(baseUrl+ "/" + id)
    .then(response => {
        console.log('Dados lidos:', response.data);
    })
    .catch(error => {
        console.error('Erro ao ler dados:', error);
    });

// UPDATE
axios.put(`${baseUrl}/1`, {  })
    .then(response => {
        console.log('Dados atualizados:', response.data);
    })
    .catch(error => {
        console.error('Erro ao atualizar dados:', error);
    });

// DELETE
axios.delete(`${baseUrl}/1`)
    .then(response => {
        console.log('Dados excluídos:', response.data);
    })
    .catch(error => {
        console.error('Erro ao excluir dados:', error);
    });
