type Contact = {
        id: string;
        name: string;
        email: string;
        photo: string
        adress: string;
        district: string;
        state: string;
        city: string;
        mobile: string;
        phone: string;
}

type NewContactParams = {
        name: string;
        email: string;
        address?: string;
        district?: string;
        state?: string;
        city?: string;
        mobile: string;
        phone?: string;
}