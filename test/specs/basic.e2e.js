
describe('Open website', () => {
    it('website opens', async () => {
        await browser.url('http://demencija-pnk.ffos.hr/index.html');
        const Header = await $('h1');
        await expect(Header).toHaveText('Novosti');
    })
})
describe('Other pages with pictures', () => {
    it('picture', async () => {
        await browser.url('http://demencija-pnk.ffos.hr/index.html');
        const slika = await $('#slika');
        await slika.click();
        browser.pause(90000);
        const elem = await $('a');
        await expect(elem).toExist;
    })
})
describe('access to links via button on publications', () => {
    it('buttons', async () => {
        await browser.url('http://demencija-pnk.ffos.hr/assets/pages/publikacije.html');
        const btn = await $('a=Časopis');
        await btn.click();
        const button2 = await $('button=Search');
        await expect(button2).toHaveText('Search');
        browser.pause(9000000);
    })
})
describe('navigation check for korisni izvori', () => {
    it('check', async () => {
        await browser.url('http://demencija-pnk.ffos.hr/index.html');
        browser.maximizeWindow();
        browser.pause(90000);
        browser.pause(9000000);
        const navlink = await $('#korisniizvori');
        await navlink.click();
        const Header = await $('h1');
        await expect(Header).toHaveText('Korisni izvori');
        browser.pause(90000);
    })
})
describe('navigation check for korisni izvori', () => {
    it('check', async () => {
        await browser.url('http://demencija-pnk.ffos.hr/index.html');
        browser.maximizeWindow();
        browser.pause(90000);
        browser.pause(9000000);
        const navlink = await $('#korisniizvori');
        await navlink.click();
        const Header = await $('h1');
        await expect(Header).toHaveText('Korisni izvori');
        browser.pause(90000);
    })
})
describe('modul check', () => {
    it('modul check', async () => {
        await browser.url('http://demencija-pnk.ffos.hr/index.html');
        browser.pause(90000);
        const modul = await $('h1=Predstavljanje projekta u medijima');
        await modul.click();
        browser.pause(90000);
         const modulTitle = await $('a=Saznaj više');
        await expect (modulTitle).toHaveText('Saznaj više') 
    })
})