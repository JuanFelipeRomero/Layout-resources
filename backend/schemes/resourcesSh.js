const z = require('zod');

const resourceSchema = z.object({
  name: z.string(),
  description: z.string().max(80),
  category: z.enum([
    'colores',
    'gradientes',
    'imagenes',
    'iconos',
    'plantillas',
    'fuentes',
    'varios',
  ]),
  image: z.string().url(),
  url: z.string().url(),
  likesCount: z.number().default(0),
});

function validateResource(object) {
  return resourceSchema.safeParse(object);
}

module.exports = validateResource;
