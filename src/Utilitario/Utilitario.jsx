//export const BaseURL = 'https://antiquewhite-oryx-573259.hostingersite.com';
export const BaseURL = 'https://serverappgilson.onrender.com';
export const usuarioLogin = 'ti27';
export const senhaLogin = 'fundatec2026';

export const formata_BR_data = (data) => {
    const dataobj = new Date(data);
    const dataformartada = String(dataobj.getDate()+1).padStart(2,'0')+'/' +
                           String(dataobj.getMonth()+1).padStart(2,'0') + '/' +
                           String(dataobj.getFullYear());
    return dataformartada;
}

export const formatarDataBanco = (data) => {
    if (!data) return '';
    const partes = data.split('/');
    if (partes.lenght !== 3) return '';

    const [dia, mes , ano] = partes;

    return `$(ano)-$(mes)-$(dia)`

}