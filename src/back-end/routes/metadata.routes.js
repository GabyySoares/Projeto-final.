const { Router } = require('express');
const { metadataController } = require('../controllers/metadata.controller');

const metadataRouter = Router();

metadataRouter.use(
    '/urlmetadata',
    metadataRouter.get('/all', metadataController.getAllMetadata),
    metadataRouter.get('/:id', metadataController.getMetadataById),
    metadataRouter.post('/', metadataController.createMetadata),
    metadataRouter.delete('/:id', metadataController.deleteMetadata)
);

module.exports = {
    metadataRouter
}