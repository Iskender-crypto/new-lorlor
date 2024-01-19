import {  defineStore } from 'pinia'
import { ref, Ref } from "vue";

export const useDataStore = defineStore('data', ()=>{
    const items = ref([
        {
            id: 1,
            img: 'layout/images/ci1154646v360x540s0.jpg',
            fullName: 'Галкин Алексей Владимирович',
            firstName: 'Галкин',
            expert: 'эксперт по лор-патологиям',
            profession: 'оториноларинголог, ринохирург',
            experience: '16 лет'
        },
        {
            id: 2,
            img: 'layout/images/card 2.jpg',
            fullName: 'Садыхов Рагим Агаларович',
            firstName: 'Рагим',
            expert: 'эксперт по лор-патологиям',
            profession: 'оториноларинголог, ринохирург',
            experience: '8 лет'
        },
        {
            id: 3,
            img: 'layout/images/card 3.jpg',
            fullName: 'Чуприков Роман Сергеевич',
            firstName: 'Роман',
            expert: 'эксперт по лор-патологиям',
            profession: 'оториноларинголог, ринохирург, фониатр, врач высшей категории',
            experience: '21 лет'
        },
        {
            id: 4,
            img: 'layout/images/card 4.jpg',
            fullName: 'Оганесян Тигран Сергеевич',
            firstName: 'Тигран',
            expert: 'заведующий отделением, экс',
            profession: 'оториноларинголог, ринохирург',
            experience: '20 лет'
        },
        {
            id: 5,
            img: 'layout/images/card 5.jpg',
            fullName: 'Якушев Анатолий Андреевич',
            firstName: 'Анатолий',
            expert: 'ведущий врач клиники',
            profession: 'оториноларинголог, отохирург',
            experience: '13 лет'
        },
        {
            id: 6,
            img: 'layout/images/card 6.jpg',
            fullName: 'Соколова Алла Васильевна',
            firstName: 'Алла',
            expert: 'кандидат медицинских наук',
            profession: 'оториноларинголог, отохирург, врач высшей категории',
            experience: 'свыше 35 лет'
        },
        {
            id: 7,
            img: 'layout/images/card 7.jpg',
            fullName: 'Старосветский Андрей Борисович',
            firstName: 'Андрей',
            expert: 'кандидат медицинских наук',
            profession: 'оториноларинголог, ринохирург',
            experience: '22 лет'
        },
        {
            id: 8,
            img: 'layout/images/card 8.jpg',
            fullName: 'Мосейкина Лилия Алексеевна',
            firstName: 'Лилия',
            expert: 'кандидат медицинских наук',
            profession: 'отохирург',
            experience: '31 лет'
        }
    ])
    const workStyles = ref([
        {
            caption: 'Cтрогий доктор',
        },
        {
            caption: 'Доктор, с которым можно поговорить как с партнёром',
        },
        {
            caption: 'Понимающий и эмоциональный доктор',
        }
    ])
    const branchs = ref([
        {
            caption: 'Все филиалы'
        },{
            caption: 'Цветной бульвар'
        },{
            caption: 'Преображенская площадь'
        },{
            caption: 'Бульвар Дмитрия Донского'
        },{
            caption: 'Мичуринский проспект'
        },{
            caption: 'Фили'
        }
    ])
    const referrals = ref([
        {
            checked: false,
            caption: 'Аллерголог-иммунолог'
        },
        {
            checked: false,
            caption: 'Врач УЗИ'
        },
        {
            checked: false,
            caption: 'Выезд на дом'
        },{
            checked: false,
            caption: 'Кардиолог'
        },{
            checked: false,
            caption: 'Массажист'
        },{
            checked: false,
            caption: 'Медсестра'
        },{
            checked: false,
            caption: 'Невролог'
        },{
            checked: false,
            caption: 'Отоларинголог'
        },{
            checked: false,
            caption: 'Отоневролог'
        },{
            checked: false,
            caption: 'Отохирург'
        },{
            checked: false,
            caption: 'Психолог'
        },{
            checked: false,
            caption: 'Пульмонолог'
        },{
            checked: false,
            caption: 'Рефлексотерапевт'
        },{
            checked: false,
            caption: 'Ринохирург'
        },{
            checked: false,
            caption: 'Сурдолог'
        },{
            checked: false,
            caption: 'Терапевт'
        },{
            checked: false,
            caption: 'Флеболог'
        },{
            checked: false,
            caption: 'Фониатр'
        }, {
            checked: false,
            caption: 'Эндокринолог'
        }
    ])
    const prices = ref([
        {
            caption: 'Консультация заведующего лор-отделением, первичная',
            number: '7,000 P'
        },{
            caption: 'Консультация заведующего лор-отделением, повторная',
            number: '4,900 P'
        },{
            caption: 'Консультация лор-эксперта с эндоскопией, первичная	',
            number: '5,000 P'
        },{
            caption: 'Консультация лор-эксперта, повторная	',
            number: '3,500 P'
        },{
            caption: 'Консультация отоларинголога-сурдолога с эндоскопией, первичная	',
            number: '6,500 P'
        },{
            caption: 'Консультация отоларинголога-сурдолога, повторная	',
            number: '4,000 P'
        },{
            caption: 'Консультация ведущего врача-отоларинголога с эндоскопией, первичная	',
            number: '3,900 P'
        },{
            caption: 'Консультация ведущего врача-отоларинголога с эндоскопией, повторная',
            number: '2,900 P'
        },{
            caption: 'Консультация врача-отоларинголога с эндоскопией, первичная',
            number: '3,300 P'
        },{
            caption: 'Консультация врача-отоларинголога с эндоскопией, повторная',
            number: '2,000 P'
        },{
            caption: 'Консультация отохирурга, КМН, первичная	',
            number: '5,000 P'
        },{
            caption: 'Консультация отохирурга, КМН, повторная	',
            number: '3,500 P'
        },{
            caption: 'Второе мнение Консилиум врачей',
            number: '7,700 P'
        }
    ])
    function translit(word:string){
        const answer = ref('');
        var converter = ref({
            'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
            'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
            'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
            'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
            'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
            'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
            'э': 'e',    'ю': 'yu',   'я': 'ya',

            'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
            'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
            'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
            'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
            'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
            'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
            'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
        });

        for (var i = 0; i < word.length; ++i ) {
            if (converter.value[word[i]] == undefined){
                answer.value += word[i];
            } else {
                answer.value += converter.value[word[i]];
            }
        }

        return answer;
    }
    return {
        items,
        workStyles,
        branchs,
        referrals,
        prices,
        translit
    };
})
