export const products = [
    {
        id: 1,
        image: "data:image/jpeg;base64,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",
        name: "HP 17-an179wm Omen ",
        description: "17.3 inch FHD i7-8750H 2.2GHz GTX 1070 8GB 16GB RAM 1TB HDD 256GB SSD Win 10 Black ",
        price: 1900,
        category: "laptops",
        featured: false
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/81AKWKpG4TL._AC_SL1500_.jpg",
        name: "ASUS ZenBook Pro Duo 15 UX582 Laptop, ",
        description: "15.6 inch OLED 4K Touch Display, i7-12700H, 16GB, 1TB, GeForce RTX 3070 Ti, ScreenPad Plus, Windows 11 Home, Celestial Blue, UX582ZW-AB76T ",
        price: 1000,
        category: "laptops",
        featured: false
    },
    {
        id: 3,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWEhYXFhYYGBgaGRocGhwZGhoZHBkcGhgeHBgYHhwcIy4lHB4rHxkcJjgmKy8xNTU1HCU7QD8zPy40NTEBDAwMEA8QHhISHjQsIyQ/NDQxPzQ0NDE0NDQ0Pzg0ODQ/NDQ0NDY0NDQ0NDY1NDQ0MTQ2NjQ0MTY0NDQ0NDQ0N//AABEIAL0BCgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xAA6EAACAQIEAwYDBQkBAAMAAAABAgADEQQSITEFQVEGImFxgZETMqEHgrHR8BQjQlJicpLB4fEVM0P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKBEBAQEAAgEDAgUFAAAAAAAAAAECAxEhBBIxE0EFUWGBkRQyobHw/9oADAMBAAIRAxEAPwDs0REBERAREQEREBETFccx4pU7Bwjtoh0NjzNjpoOulyIGUvKzmPFq1c1UdmRixCIQfhtcAkZWGxsCbWOu1pmuGceq02y1mzpbcr3x01uAR5i/jJ6R23SJFwmNSoLowbqOY8wdRJUhJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQKTlPbHtEpxpSxKoMoI5G/eNvEi3kgnQe0fEv2fDO4+a2VP7m20521a3RTOJ8UXKVYg3YC99TNOPE1fKmtdNgWolVADlqJcHKwuARsQN1PiLGSaD5RZXNv5HOYeQfce4A8ZqlJwoBQ2PK2hmQo8RYWDi+m439RNNcOp/arOSX5bDi8NiO49JgtrEqp1Omq5xY+o+s8L2zr4YLdXdc1mVzfKtiSyvudrWOuugkTC48jVH05jl6jlJ4x9OoLVVAPXl77iY2fm0bTwLtvhcQAM/w30ulTQgsLgX2vbkbGbQDONcR7KI4zUzbRrFbXGYAEqeRsALi0j4PjePwLWVs6XPdf5RdgFUE/KqrcljqTIO3bomj8C+0XD1rLVvRcgnvfKRmyhuqgna83OlVVlBVgwOxBBB9RISuxEQEREBERAREQEREBERAREQEREBERAREQEREBESDxfHrQoPVbZFuBtcnRV9WIHrA5t9p/Gy1ZaKHSnq1ubGxPsLD/ADExCMuIoi1i66HkbWuPwmFxrtUqO7m5Ykk9STcn1JJ9ZYQMpupIPhN+PUkTvivSRjMGUMvUj3hfa3+peo8RLEZ7GwsdN5mMJgqb02YDmdOnSdWa5NZv3YMLuwuPESUtc89dN56xODZMq2Njuet5QOLlQug0uekXGdeKr7tZ8xcoY10N0YjqOR8xMnR48jjLWS39Q1HtuPrMQ9EcpGq0Zjv01nnPlpnml+WdxfZ6lVAemVYXDcipKm4vybXrLmH4hWw737yHmyXKN4shv9M3pNYo4l6TXRip8Nj5jY+szeF7Tqwy10+8ouPVdx6e05rLL1W0vfw3bhXbIMB8VQV2z09R6ruPT2m0YTGJVXNTcMPA7eBG4PgZy48Pp1O/Qex/mQ/Q/kwM84P4yVCLgMovnQ5GAO11GhvblbykJddianwftEwGXENm6OFt/kBv5gTZsPXVxmRgw6g3/wDJCV6IiAiIgIiICIiAiIgIiICIiAiIgIiIHmc8+0rid2TDqdB36nmbhF9sxI8VM33F4hadN6jGyopZj0Ci5/CcRxOOFZ6mIdgC7ktr8tzZV8gAFB6CV1rqN/T4mt+fiLApSy1GSgRPDtHFq9uzmznrwhOluVpnuz/FkQhHFhrZvPkfC4+sxb3K6i4HPpMficUKZGl7/hO3NeXyZldHxuGzqPE6EdLTB43hZXvA9b/nMVwji7WsjnTYdPSZZ+JGouVtCT7TSVz3PVYmpTZVzAm3TpKYcllN+UyeMw+gy3sRf1lvDYc/D1H/AGaZt7U3J7e0B6F1JmOrUOkzFamRIjUzNLjO55jHO9Zvhhlr1KTZkZkPVTv4Hr5GTqHHlapnqhkqWC/FpEi4G2emTla3UWMt8TqfDpk/xE5QDtrz8bAEzXwTznn8/HnGus128WrrPdjpeD4rmXNdaqc3p6MP70Oq+oEmf/KlFL0SzMNspy6/ysTt5TldOuyNmRirDmpIPuOU2ThXbJ07tZA682QBW8SV0VvpMWnToHDO29UkZsjGwzIRkYdSvUeOom38L4/Rr6KSr/ysLH0Ox9DOb8PXDYx0FMhrtdhsyKNWYqdVNtAepEy3Y3GJ8fE0kZiM2amzG5KKctr87E311s3hA6TEsYasHUEG/wCY3l+QkiIgIiICIiAiIgIiICIiAiJ4ZgASTYDUk8oGgfaxxkphxh0PfqatbUhFOmniw9crCcgw7KxsQb25bEeR1kztj2gOKxtSoG7t8qDoq6L5aakdSZ44fiQ5ytbUaXtvz/OY680SMJiAgCm5B2PQdfEDaShV/W495ZrMwpk6d066XJF9SR5H6S2rZHIzLlJ06E7kXv3WtyOh95OdXNaTepOk7DYsowYGxHt6g6EeBmDx1bPUdwoCE2FgQANwP6b2va/0kzirqFGU/MNuX9Wv+vGQAgJVFNiR3yzgKSLte+1rW9Z2Z1NTwx1UfOVIZSdOY3HrMzheOk2DgH+tRY+bDn6TDBpQoOWh+ktLZ8Isb1gMepA1DL1HXx/KT1rAjTYznNHEuhuCVPUbH/Rmf4bxMvoRtrcbf8M1zuMtY7bFVsfSQnQgyqYsAEkgDx0+sicb4iEosVbvNcJbXXmfQfWb/Ukz2w+nbWA43iw9TKouEJF9NW2NvAbe/hMdWq2F7W9PzlhrjmR6AyM9RuZBHtaebvV1q2/d24zMzqJGcE8xKNU1tvLC1Btt7TL9mOEticXTpDYkFj0Uasfb8RK9LN37PYf9l4a1U6VcUcqdVpjc+uv+SyHgMW1GqlVd0a9uqnRl9QTJ/aPGipXyppTpgJTA2suhI8z9AJiwIQ632XLg1c1QPTqVDUoHmqOobIdABZiwG+lpss5T2XxtZ6aU6bgPRqo9mtZ6DEiol7Ei2bMLcwonUqVTMoI5yCLkREJIiICIiAiIgIiICIiAml/abxn4OD+GpAevdBrsgH71vKxC/fE3SfPv2icXOLxrlTenTIp07bEI37xh1uxOvMBZFvQ1/FYVHUspGbpzPp18ZCAK63J/1MhhkGYAWvzIPy+YlA6/EJ01O/8AKf5gOl7+hlbq2+UpCIpBVqlzvbNeWKNPMjKGsuYmx2uCN56qIlmCqM9iCNbMOo1/CWnchFFwTaxZeYP8J67mQLvCzTWqDVU1EXN3L5c/dbKM19Bmy87+exihLU82ZbklSvOwAObawF/G+kvIgZURctyxLOQbqDYWPLILFrjrylM4WpcFnVG7rWtoD3DY3tte3pNc5sUojFsqbKDcjQG+zW/mNth6Sr4YkVHRWNOmRdmtdQzZUzeJPSeXN1d27zsws1/lNyWuOptp6zw11GU6A2JsRcg2IvY+oB6+Mprdzf0d3puLGs38+/5HC5RY36qRz/L85Cp4ysHYUmIGxtqPM3v4yfi2L2yKO6iqMtxmsNXN+Z5+WkyfBOCuSFVeepNl153LW/VpTfPczx5rp4Pw763Jfd4zPNQsDwxmF6rM2t7EkgHyOx35dZKxnDVy6efr/qZntRVOEW9PKruuYFgGyKDYAKwIuzKdTfQaam8t1cYauHSo9viZKechQt8yEgkAAX7pN/6ugFuO3k1Jy2/s9n039N7v6bOPFndt/j/bScSttj7ae9pAdr+MncUX94bfrUyCX0tYf7no4vuzLXy/PicfLrM+JbFRt18J03sdhf2bAVMSdKlf93S6hf43/H/EdZonZ/hbYjEJTW93YL5c2b0FzOj9ocQpqLSTSnRUU0A200Y+4t92SxrEgSsCVElCVwvGmhXSoNgbMOqnRh7a+YE3n7Ne0FbELiKeIH72lVYZlUhCG1AU21AG3PLlJ3nPCLzJ4LtNVw7YQqLolXJWCi7MjgLSOgucpzD/ABHOQR2uJ4RwQCNjPchJERAREQEREBERAREQNa7d8b/ZcE7KbVH/AHdPwdge991bt92cQwqoBYAbdBebr9siVnrUgQRRRLqRsXZjnzDyVQPM9ZzaniGQ2J09/wD0SmrZ8JidW4aFYMpuCRcHkL626jzlRw9SdSVNxqNreunX2kdn/ds17mxI6Xtp9TLeJxDANkucygnNfu3/AIbnQnX9Xk5nc7ou43F/Kl8xHPn7eRlnDUWfMVQsEUu1uSAgE36XYe8xa4V27xUhSdzp+OszVJFFMZXIck5gTlTJ3Mim41JN2vew7u28vnMnmov6LJIBBRj1HIqfMfiPpLiVbpk+W7AlrmxsDYsLE3F9xyOxlurvqLHmPH9fozwVNr2NrkX5XFri/UXHuJpKrZ2k/sxZmy5VCJmJLAggBbkEfMSSDYdZTA4oIztlUsUdQCtwC4sWFtmAJtpbeWFqEArfQ623F+o6HxkqriTUWjS0CoGC6BSS7ZnJN9SSLA6cpS+3x18tuO6xbL8VN7OYhVLXFx3SfuNdfwPvM5wevcKBfS5vfmMxBAtoe8QTc3su1tdcxOEI1TutbUbXH5yR2bxl2KNobgjxGxP0nBy8OvN+z6X03quHWJxWeb/Ha72wpGrjHQ3CJ8PO3IL8NSqjqxGtutydLkVxj5aYUjKScxX+RQuVE8woJ9RzkviPFHLFu63eJViillF+7YkXGlvK2k1Pi3Eb3ANydz+OvWUne+sSNc5z6TOubkst66nX+Ix2IfM7HxllmvYHXy3njMZN4ThHrVkpqAWcgL5nS/oLn0nozxOnynJq71dX5vlvfYbCfs+Gq4o/M16VHzPzuP1/CZSbLxXhVqdKkmiUkyr4n+Jj4ma7Voshsw9YZ1blRESRUS5w7GNRqq9tNQwH8SnRh7a+dpbEo63HlA7PwPFBkABuLBlPVT+vrMvOYdhuMW7jHVNV8UPzL6E/XwnTVa4BGxkUj1ERISREQEREBERAREQI2NwSVUKVFDKdwZxvtp2AfD3qUQXpbkD5knbZ4ZQQQRcHcHnA+VQCrA72Ol+XL3ntsf8AzXGo2F7++gnYO2v2drUzVsMAr7snJvLxnH8ThXRyrKVYHUHQiTBcr4kvyIt+rnp/2S62LWqbuArWUBlFgFVQqgL0AUafXlIOHxDLmsQMwysDswzA5T6gTwzWJsCB0Jvb1l4ivZmRx+ZLUiyulMsFZQtruQXN1vfvCwa+uUW00kTBV0V8zIHGVgAdgxUhWI/iAJvbTbcby49KwJRrrY3F9QLXN9LMNOnLUSKT5lR1ewYWBB6i5FjpY8jLaVe/YWNtxex8CD4Xv6S7RplmCjmefLqfaXOKcL+HYMRmIDEc1BFxfobWNvETmuvZry9n6H1+P3Z68Mhh8WG7ra20LG5Zeha+pXXfcW58o/EcGQ2dCMym9wR5jb3mIw2NI0NzbQHZh5H0mRwWPsm4IOrgAaHrbr4je203ll+Xm29fHj/vsouLd1sSLEePqPOY7E4Ya2Gn6+su17K9/wD831B2seTfQaz3R1vcm40PIdRb0kzMnxFd8m9f3W1hKtMr5fredI+yrg1y+IYbdxP7iO+3oLD1M1MYbM2RRmaoVVVtzJtmH+52zgPDloYdKa7KoF+p3ZvU3Mi+GaS9IGYzGcNDA6TNFZ4ZZA0XG8IKklZjGUqbMLTotbDgzD43hYPKDpqMM9pOxXDGX5faQSORFpKvSuDxJpVFdd1N/Mcx6i4nZezuPWpSFjewBH9p29tR6TibbeX4fr8ZuHYLi+RxTY6akeR+cenze8JdUiIkJIiICIiAiIgIiICIiAmq9ruxtHGITYJVGzjn4GbVED5n4rwqvga9nUBhmCsVzIwZSt7HQmxuL87GWEorUQZPmBtk1ZwLHLk51AFRma9sulp9Gca4LRxVMpVUMDseY8QZwztf2Lr4FiwvUpH5XW+YCxBVgPA7/o2muvlHTWCtrHcHYjYz0ryW2NR0qvUP726FQqjLUuwDlrCyZUXS1iS3OQXIC3B08bXH5y08wScK5WopG4PnrfS3rNhxfDVsqg5n1NRsxYHMAV8L7n1F9dtfwC52AGl7b/WbRxDiQo5WFIMzDu52zKSDZqhX+L+3QXtvqJxc8ut+2Povw/WeH085NfHd/e/aMTxDBpTTYFmByjp/V+U1pl1NjYjmN5tuJxz1sLet/wDapVg2XLmWo1QEG1hbRCNNttLTTcY2Vz5SeKXOrm3th+IXHLxTlznqry1gRkc2HK21/Ubc7SiOXqd6/jblbnp6GRHcFduc9YBm+IAoJZu6B1voPradUrxq6D9nvCviYk1TcrT7qE6kufma/gCfcTrKU5huxvBxQwyJztqepOrH3+gE2ZKMioRRSlDQmSWjPXwZAxDUJYejM4cPKfscDWK2BvymJxvAw3Kb8MFKHh4PKBxziHA3VswzdNNQR0IMh0Kj03VtmU3HpO1vwZG3AkPEdkcO/wAw9oQldmuJLXw6MDqBY9fD8vQzMzDcD4BTwub4ZchuTNcDyFpmYSREQEREBERAREQEREBERASzWoq6lXUMp0IOoMvRA4125+zZkzVsILrqWp8x4r+v+8xJIJDCxB1BFiCOo5T6znP+3H2eU8UGqUAKdbwFlfwIky9DjlHFA2vZWGlxz/7LXEqz1sScq6KFW2uVFVLasdhYE676y1j8HUw9RqdVCrDkfxHUS5hcWoILqHA1sdBe1hmtqwsBpcbTPXXfu68uzj1dYmLrqS9sgVyUAALZiCNxdUUqrEeJLH0mqYl8zEzOcU4jmB1uzb8gBsAOgtoByEwLCU4pe7q/dr6zlzZOPN8QpHWxm7/Z1wg1sSrkd2ntfmx2PouvoJpNJSWFtSZ377P+C/Aw63HeOp/uPzf6H3ZtHn1t+GogAAbDSTkpylCnJKiEPISess9RA85ZW0rECkrEQKRKxAREQEREBERAREQEREBERAREQEREBERA17tV2VoY6mVqLZh8rjcGcE7T9l8RgahV1JQnuuB3WHK/Qz6ckLiXD6demadVQ6EbEfUQPlYIH0uAeRJAtc8ydAPE6SHiKLIbMCPS3/k6H24+zuphSatAGpR3sNWT8x+teWmnG5kKv3yFCqWN7AEkKL7AZm0GmvtHS3bJdgODmvilYi6oQfvX7v4E/dn0Pw/ChVAGwFppP2Y8A+FQDEd46nzI1HoLD3nSaVOwkqvSLae4iAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHh0BBBAIO4OoM51x/wCzKk+IWvQAXvAshNlJve+x06jnOkRAh8PwS0qaqOQ1PU8zJkRAREQEREBERAREQEREBERAREQERED/2Q==",
        name: "ThinkPad X1 Yoga Gen 6 (14, Intel)",
        description: "Meet the 6th generation of the ThinkPad X1 Yoga, a 14 2-in-1 touchscreen laptop that's been reimagined to enhance your experience. You'll still find the details you've enjoyed on our premium X1 Yoga, and you'll discover an impressive 16:10 display, a wider TouchPad, a larger battery for more time unplugged, and a new Storm Gray color with tone-matched keyboard. Plus, with the Intel® Evo® platform, you get a super-responsive device that's ready whenever you need it.",
        price: 1700,
        category: "laptops",
        featured: false
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/61Ca+bjvjoL._AC_SL1307_.jpg ",
        name: "AKG Pro Audio K240 STUDIO Over-Ear ",
        description: "Semi-Open, Professional Studio Headphones",
        price: 85,
        category: "headphones",
        featured: false
    },
    {
        id: 5,
        image: "https://m.media-amazon.com/images/I/71zAKORB6hL._AC_SL1500_.jpg",
        name: "ASUS Zenbook S 13 OLED Ultra Laptop, 13.3",
        description: "OLED 2.8K Display, Intel Evo Certified, i7-1355U CPU, Intel® Iris Xe Graphics, 32GB RAM, 1TB SSD, Windows 11 Pro, Basalt Grey, UX5304VA-XS76T ",
        price: 1299,
        category: "laptops",
        featured: false
    },
    {
        id: 6,
        image: "https://m.media-amazon.com/images/I/61+1SWHs9uL._AC_SL1500_.jpg",
        name: "ASUS Chromebook Vibe CX55 Flip, Cloud Gaming Laptop",
        description: "15.6 inch Full HD 144 Hz Touch Display, Intel® Core™ i5-1135G7 Processor, 512GB SSD, 16GB RAM, ChromeOS, Mineral Gray, CX5501FEA-AS562T ",
        price: 589,
        category: "laptops",
        featured: true
    },
    {
        id: 7,
        image: "https://m.media-amazon.com/images/I/61QY3V6A-NL._AC_SL1500_.jpg",
        name: "Redragon Gaming Mouse",
        description: "Wireless Mouse Gaming with 8000 DPI, PC Gaming Mice with Fire Button, RGB Backlit Programmable Ergonomic Mouse Gamer, Rechargeable, 70Hrs for Windows, Mac Gamer, Black",
        price: 25,
        category: "mice",
        featured: false
    },
    {
        id: 8,
        image: "https://m.media-amazon.com/images/I/71gR-IwIv-L._AC_SL1500_.jpg",
        name: "setup bundle",
        description: "Wireless Gaming Keyboard and Mouse, Rechargeable, Rainbow Backlit with 3800mAh Battery Metal Panel,Mechanical Feel Keyboard and 7 Color Mute Mouse for Windows Computer Gamers",
        price: 55,
        category: "bundle",
        featured: false
    },
    {
        id: 9,
        image: "https://m.media-amazon.com/images/I/71fYTieKp0S._AC_SL1500_.jpg",
        name: "vintage bundle pink varient",
        description: "Pink Typewriter Keyboard and Mouse,Retro Vintage Mechanical Gaming Keyboard with White LED Backlit,104 Keys Anti-Ghosting Blue Switch Wired Cute Keyboard,Round Keycaps for Desktop PC/Laptop Mac",
        price: 55,
        category: "bundle",
        featured: false
    }
    ,
    {
        id: 10,
        image: "https://m.media-amazon.com/images/I/710B-MnAc9L._AC_SL1500_.jpg",
        name: "Snpurdiri 60% Wired Mechanical Keyboard",
        description: "Mini Gaming Keyboard with 61 Red Switches Keys for PC, Windows XP, Win 7, Win 10 (Black-Red, Red Switches)",
        price: 162,
        category: "keyboards",
        featured: false
    }
    ,
    {
        id: 11,
        image: "https://m.media-amazon.com/images/I/71C-sMCpLWL._AC_SL1500_.jpg",
        name: "Moobesthy Wireless Headphones Over Ear, Bluetooth Headphones Over Ear",
        description: "60 Hours Playtime Headphones Wireless with 6 EQ Modes, HiFi Stereo bluetooth Headphones with Microphone for Office,PC,Phone",
        price: 23,
        category: "headphones",
        featured: false
    }
    ,
    {
        id: 12,
        image: "https://m.media-amazon.com/images/I/61esuJaJ9CL._AC_SL1426_.jpg",
        name: "iClever Bluetooth Kids Headphones",
        description: "BTH13 Cat Ear LED Light Up Wireless 50H Playtime, 74/85/94dB Volume Limiting Children Headphones with Microphone Over for School/Tablet/PC",
        price: 32,
        category: "headphones",
        featured: false
    }
    ,
    {
        id: 13,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX442?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1686764365861",
        name: "Beats Solo3 Wireless Headphones",
        description: "Rose Gold",
        price: 229,
        category: "headphones",
        featured: true
    }
    ,
    {
        id: 14,
        image: "https://m.media-amazon.com/images/I/81iZOMLwqPL._AC_SL1500_.jpg",
        name: "CORSAIR K70 MAX RGB Magnetic-Mechanical Wired Gaming Keyboard",
        description: "Adjustable Actuation MGX Switches - Rapid Trigger Mode - PBT Double-Shot Keycaps - iCUE Compatible - QWERTY UK Layout - Steel Grey",
        price: 222,
        category: "keyboards",
        featured: false
    }
    ,
    {
        id: 15,
        image: "https://m.media-amazon.com/images/I/61M-QNJf4pL._AC_SL1200_.jpg",
        name: "SAMSUNG Galaxy Book2 Pro Laptop Computer",
        description: "15.6”, i7 / 16GB / 512GB, 12th Gen Intel Core Processor, Evo Certified, Lightweight, 2022 Model, Graphite",
        price: 1249,
        category: "laptops",
        featured: true
    }
    ,
    {
        id: 16,
        image: "https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_SL1500_.jpg",
        name: "ASUS ROG Strix G16 (2023) Gaming Laptop",
        description: "16 inch 16:10 FHD 165Hz, GeForce RTX 4060, Intel Core i7-13650HX, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-AS73, Eclipse Gray",
        price: 1280,
        category: "laptops",
        featured: false
    }
    ,
    {
        id: 17,
        image: "https://m.media-amazon.com/images/I/61bK7KwOa+L._AC_SL1500_.jpg",
        name: "Razer Basilisk Ultimate HyperSpeed Wireless Gaming Mouse",
        description: "Fastest Gaming Mouse Switch, 20K DPI Optical Sensor, Chroma RGB Lighting, 11 Programmable Buttons, 100 Hr Battery, Classic Black",
        price: 78,
        category: "mice",
        featured: false
    }
    ,
    {
        id: 18,
        image: "https://m.media-amazon.com/images/I/61S4llvgPZL._AC_SL1500_.jpg",
        name: "Corsair Scimitar Pro RGB - MMO Gaming Mouse ",
        description: "16,000 DPI Optical Sensor - 12 Programmable Side Buttons - Black",
        price: 60,
        category: "mice",
        featured: true
    }
    ,
    {
        id: 19,
        image: "https://m.media-amazon.com/images/I/61RuA9aqdsL._AC_SL1500_.jpg",
        name: "ROCCAT Burst Pro PC Gaming Mouse",
        description: "Optical Switches, Super Lightweight Ergonomic Wired Computer Mouse, RGB Lighting, Titan Scroll Wheel, Honeycomb Shell, Claw Grip, Owl-Eye Sensor, 16K DPI, Black",
        price: 20,
        category: "mice",
        featured: false
    }
    ,
    {
        id: 20,
        image: "https://m.media-amazon.com/images/I/81-nE4e2YvL._AC_SL1500_.jpg",
        name: "SteelSeries Aerox 5 Wireless - Gaming Mouse",
        description: "18000 CPI -- TrueMove Air Optical Sensor - Ultra-lightweight Water Resistant Design – 180+ Hour Battery Life,Black",
        price: 20,
        category: "mice",
        featured: false
    }
    ,
    {
        id: 20,
        image: "https://m.media-amazon.com/images/I/61MJXznbAhS._AC_SL1000_.jpg",
        name: "VersionTECH. Wireless Gaming Mouse",
        description: "Rechargeable Computer Mouse Mice with 7 LED Lights, 6 Programmable Buttons, 2.4G USB Nano Receiver 3 Adjustable DPI for Laptop PC Gamer Desktop Chromebook Mac-Black",
        price: 13,
        category: "mice",
        featured: false
    }
    ,
    {
        id: 21,
        image: "https://m.media-amazon.com/images/I/61Wap7v3shL._AC_SL1500_.jpg",
        name: "LexonElec K670 Wireless Gaming Keyboard and Mouse",
        description: "16 Kinds RGB LED Backlit Rechargeable 5000mAh Battery Metal Panel,Mechanical Feel,Gaming Mute Mouse for PC Gamers(Black-White)",
        price: 68,
        category: "bundle",
        featured: false
    }
    ,
    {
        id: 22,
        image: "https://m.media-amazon.com/images/I/71QDJHG1PqL._AC_SL1500_.jpg",
        name: "Redragon S101 Gaming Keyboard, M601 Mouse",
        description: " RGB Backlit Gaming Keyboard, Programmable Backlit Gaming Mouse, Value Combo Set [New Version]",
        price: 45,
        category: "bundle",
        featured: false
    }
    ,
    {
        id: 23,
        image: "https://m.media-amazon.com/images/I/51gbDMqxjgL._AC_SL1001_.jpg",
        name: "Logitech Bundle ",
        description: " G 213 Prodigy Gaming Keyboard + G203 Wired Gaming Mouse + G335 Wired Gaming Headset Black",
        price: 180,
        category: "bundle",
        featured: false
    }
    ,
    {
        id: 24,
        image: "https://m.media-amazon.com/images/I/81LbJ5u3bmL._AC_SL1500_.jpg",
        name: "Ritz Gear RGB Gaming Accessories Kit ",
        description: " 4-in-1 Rainbow LED Backlight Bundle PC Combo with Multimedia Keyboard, Optical Mouse, Mouse Pad & Headset w/Adapter | for Windows 7+ Desktop, Laptop, Xbox & PS4",
        price: 30,
        category: "bundle",
        featured: false
    }
    ,
    {
        id: 25,
        image: "https://m.media-amazon.com/images/I/81vOgTWuGKL._AC_SX679_.jpg",
        name: "Montech MKey Mechanical Gaming Keyboard ",
        description: " Customizable RGB LED, Premium MDA Profile PBT Keycap, Hot-Swappable, Gateron G Brown Pro 2.0 Pre-lubed Switches, Osaka Castle Theme, Freedom (MK105FB)",
        price: 95,
        category: "keyboards",
        featured: false
    }
    
    ,
    {
        id: 26,
        image: "https://m.media-amazon.com/images/I/41ikzM0ZbBL._SX300_SY300_QL70_FMwebp_.jpg",
        name: "8Bitdo Retro Mechanical Keyboard ",
        description: "Bluetooth/2.4G/USB-C Hot Swappable Gaming Keyboard with 87 Keys, Dual Super Programmable Buttons for Windows and Android - N Edition",
        price: 90,
        category: "keyboards",
        featured: false
    }
    
    ,
    {
        id: 27,
        image: "https://m.media-amazon.com/images/I/71Mi6qhb2aL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        name: "SteelSeries New Apex 9 TKL – HotSwap Optical Mini Keyboard ",
        description: "TKL Esports Design – Optical Switches – RGB Customization – Aluminum Alloy Frame – Double Shot PBT Keycaps",
        price: 100,
        category: "keyboards",
        featured: true
    }

    ,
    {
        id: 28,
        image: "https://m.media-amazon.com/images/I/61V2O4vbYhL._AC_SL1500_.jpg",
        name: "Logitech G915 TKL Tenkeyless Lightspeed Wireless RGB Mechanical Gaming Keyboard ",
        description: " Low Profile Switch Options, Lightsync RGB, Advanced Wireless and Bluetooth Support - Linear",
        price: 134,
        category: "keyboards",
        featured: false
    }

]