const objetos = [];

class MetadataController {

    async getAllMetadata(req, res) {
        try {
            res.status(200).json({ success: true, data: objetos });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Error" });
        }
    }
    async getMetadataById(req, res) {
        try {
            const { id } = req.params;
            res.status(200).json(objetos[id]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to get the badge" });
        }
    }
    async createMetadata(req, res) {
        try {
            const { id, name, image } = req.body;

            if (!name || !image || !id) {
                return res.status(400).json({ success: false, error: "All fields are required, name, image, id" });
            }
            objetos[id] = { id, name, image };

            res.status(200).json({ success: true, transaction: objetos[id] });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async deleteMetadata(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ success: false, error: "Id is required" });
            }
            objetos[id] = null;

            res.status(200).json({ success: true, response: "Deletado com sucesso" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
}

const metadataController = new MetadataController();

module.exports = {
    metadataController
}
