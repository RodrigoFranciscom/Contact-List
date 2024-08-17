// revisar 17 de agosto

const getState = ({ getActions, getStore, setStore }) => {
    let fetchTimeout;
    const debounceFetch = (fn, delay) => {
        clearTimeout(fetchTimeout);
        fetchTimeout = setTimeout(fn, delay);
    };

    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: () => {
                debounceFetch(() => {
                    fetch('https://playground.4geeks.com/contact/agendas/rmorales', {
                        method: "GET",
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            contacts: data.contacts || [],
                        });
                    })
                    .catch((error) => console.log(error));
                }, 1000);
            },

            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/rmorales/contacts/${id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                .then((response) => {
                    if (response.status === 200) {
                        return getActions().getContacts(); // Llamada para obtener contactos (que se recargue)
                    } else {
                        throw new Error('Failed to delete contact');
                    }
                })
                .catch((error) => console.log(error));
            },

            handleOnSubmit: (data) => {
                fetch('https://playground.4geeks.com/contact/agendas/rmorales/contacts', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then(data => {
                    console.log(data);
                    getActions().getContacts();
                })
                .catch((error) => console.log(error));
            },

            updateContact: (id, data) => {
                fetch(`https://playground.4geeks.com/contact/agendas/rmorales/contacts/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Failed to update contact');
                    }
                })
                .then(data => {
                    console.log(data);
                    getActions().getContacts();
                })
                .catch((error) => console.log(error));
            }
        }
    };
};

export default getState;
