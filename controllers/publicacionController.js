const { Publicacion, User } = require('../models');

exports.crearPublicacion = async (req, res) => {
    try {
        const { titulo, contenido, idUser } = req.body;
        const user = await User.findByPk(idUser);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const existing = await Publicacion.findOne({ where: { titulo, idUser } });
        if (existing) {
            return res.status(409).json({ error: 'Ya existe una publicacion' });
        }
        const publicacion = await Publicacion.create({ titulo, contenido, idUser });
        res.status(201).json({ 
        publicacion, 
        message: 'Publicación creada con exito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
