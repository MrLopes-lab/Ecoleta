import { Request, Response } from 'express';
import knex from '../database/connection';

class ItensController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.118:3333/uploads/${item.image}`
        // image_url: `http://localhost:3333/uploads/${item.image}`
      };
    });
  
    return response.json(serializedItems);
  }
}

export default ItensController;