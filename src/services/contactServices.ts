import { api } from "./api";

export function getContacts() {
    return api.get<Contact[]>('contacts');
}

export function createContact(contact : NewContactParams) {
    return api.post('contacts', contact);
}

export function deleteContact(contact : Contact) {
    return api.delete(`contacts/${contact.id}`);
}

export function editContact(contact : Contact) {
    return api.put(`contacts/${contact.id}`, contact);
}
