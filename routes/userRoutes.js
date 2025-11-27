var router = require("express").Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         correo:
 *           type: string
 *           description: Correo electrónico
 *         carrera:
 *           type: string
 *           description: Carrera del usuario
 *         auto:
 *           type: string
 *           description: Información del auto
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *     UserCreate:
 *       type: object
 *       required:
 *         - nombre
 *         - correo
 *         - password
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         correo:
 *           type: string
 *           format: email
 *           description: Correo electrónico
 *         password:
 *           type: string
 *           description: Contraseña (mínimo 6 caracteres)
 *         carrera:
 *           type: string
 *           description: Carrera del usuario
 *         auto:
 *           type: string
 *           description: Información del auto
 */

/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Usuarios encontrados
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /users/new:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreate'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Success
 *                 mesage:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Request body vacío
 *       409:
 *         description: El correo ya existe
 *       500:
 *         description: Error interno del servidor
 */

const userCtrl = require("../controllers/user");

router.post("/new", userCtrl.createNewUser);
router.get("/all", userCtrl.getAllUsers);

module.exports = router;
