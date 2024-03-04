function createChampion(name, health, ...attack) {
    let privateName = name;
    let privateHealth = health;
    let privateAttack = attack;

    return {
            getHealth: function() {
                return privateHealth;
            },
            getName: function() {
                return privateName;
            },

            appendAttackToPage: function () {
                const attackDiv = document.querySelector('.attack');

            for(const attack of privateAttack) {

                const paragraph = document.createElement('p');
                paragraph.textContent = attack;
                attackDiv.appendChild(paragraph);
            }
            },

            getAttack: function() {
                return privateAttack;
            }
        };
    }

    const champion = createChampion('Diana', 100, 'Moonsilver blade', 'Crescent strike', 'Pale cascade');

    champion.appendAttackToPage();

    console.log(`Name: ${champion.getName()}`);

    console.log(`Health: ${champion.getHealth()}`);

    console.log(`Attacks: ${champion.getAttack().join(', ')}`);