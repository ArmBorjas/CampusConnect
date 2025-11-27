const express = require("express");
const router = express.Router();
const publicacionController = require("../controllers/publicacionController");

/**
 * @swagger
 * /publicaciones:
 *   post:
 *     summary: Crear una nueva publicación
 *     description: Crea una nueva publicación asociada a un usuario existente
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - contenido
 *               - idUser
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación
 *                 minLength: 3
 *                 maxLength: 255
 *                 example: "Mi primera publicación"
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación
 *                 example: "Este es el contenido de mi publicación"
 *               idUser:
 *                 type: integer
 *                 description: ID del usuario autor
 *                 example: 1
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 publicacion:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     titulo:
 *                       type: string
 *                       example: "Mi primera publicación"
 *                     contenido:
 *                       type: string
 *                       example: "Este es el contenido de mi publicación"
 *                     idUser:
 *                       type: integer
 *                       example: 1
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *                 message:
 *                   type: string
 *                   example: "Publicación creada con exito"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       409:
 *         description: Ya existe una publicación con ese título para este usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ya existe una publicacion"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Mensaje de error"
 */

router.post("/publicaciones", publicacionController.crearPublicacion);

module.exports = router;
