type Session = {
    pin: string,
    title: string,
    hostName: string,
    createdAt: string,
    status: string,
};

const sessions = new Map<string, Session>();


export function saveSession(session: Session) {
    sessions.set(session.pin, session);
}

export function getSession(pin: string) {
    return sessions.get(pin);
}