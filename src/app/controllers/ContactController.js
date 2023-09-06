const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ message: 'contact not found' });
    }

    response.json(contact);
  }

  store() {

  }

  update() {

  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ message: 'contact not found' });
    }

    response.json({ message: 'contact deleted' });
  }
}

module.exports = new ContactController();
