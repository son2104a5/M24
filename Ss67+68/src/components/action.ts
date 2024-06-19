export const changeList = (status: string) => ({
    type: 'CHANGE_LIST',
    payload: status
});

export const changeStatus = (id: number, status: boolean) => ({
    type: 'CHANGE_STATUS',
    payload: { id, status }
});