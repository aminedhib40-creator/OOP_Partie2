# Programmation Orientée Objet (OOP)

##  Exercice : Mini Game


### Classe de base : `Personnage`

```javascript
class Personnage {
  constructor(nom, pointsDeVie, force) {
  }
}
```

##  Votre classe `Personnage` doit avoir :

### Propriétés :
- **nom** : _string_
  → le nom du personnage.
- **pointsDeVie** : _number_
  → les points de vie actuels du personnage.
- **force** : _number_
  → les dégâts que le personnage inflige de base.

---

##  Méthodes :

###  attaquer
Fonction qui :
- prend en paramètre une **cible** (un autre personnage)
- affiche un message du type `"X attaque Y !"`
- appelle `recevoirDegats` sur la cible, avec la **force** du personnage comme dégâts

---

###  recevoirDegats
Fonction qui :
- prend en paramètre un nombre de **dégâts**
- diminue **pointsDeVie** en conséquence
- empêche **pointsDeVie** de descendre en dessous de `0`
- affiche les points de vie restants

---

###  estVivant
Fonction qui :
- retourne `true` si **pointsDeVie** est supérieur à `0`
- retourne `false` sinon

---

### Classe `Guerrier` (hérite de `Personnage`)

```javascript
class Guerrier extends Personnage {
  constructor(nom, pointsDeVie, force, arme) {
  }
}
```

##  Votre classe `Guerrier` doit avoir en plus :

### Propriétés :
- **arme** : _string_
  → le nom de l'arme utilisée par le guerrier.

##  Méthodes :

###  utiliserArme
Fonction qui :
- prend en paramètre une **cible**
- affiche un message du type `"X attaque avec [arme] !"`
- inflige les dégâts (**force**) à la cible

###  attaquer (redéfinie)
- doit **redéfinir** `attaquer` pour qu'il appelle `utiliserArme` au lieu du comportement de base

---

### Classe `Mage` (hérite de `Personnage`)

```javascript
class Mage extends Personnage {
  constructor(nom, pointsDeVie, force, mana) {
  }
}
```

##  Votre classe `Mage` doit avoir en plus :

### Propriétés :
- **mana** : _number_
  → la quantité de mana disponible pour lancer des sorts.

##  Méthodes :

###  lancerSort
Fonction qui :
- vérifie si le Mage possède au moins `20` mana
- si le Mage possède moins de `20` mana :
  - il ne lance pas le sort
  - son mana ne change pas
  - retourne `"Pas assez de mana !"`
- sinon :
  - diminue le mana de `20`
  - inflige `30` dégâts fixes à la cible, indépendamment de sa force

###  regenererMana
Fonction qui :
- augmente **mana** de `10`
- empêche **mana** de dépasser `100`

###  attaquer (redéfinie)
- doit **redéfinir** `attaquer` pour qu'il appelle `lancerSort` au lieu du comportement de base

---

### Classe `Paladin` (hérite de `Guerrier`)

```javascript
class Paladin extends Guerrier {
  constructor(nom, pointsDeVie, force, arme, pouvoirSoin) {
  }
}
```

>  Le `Paladin` hérite de `Guerrier`, qui hérite lui-même de `Personnage`.
> Il possède donc **toutes** les propriétés et méthodes des deux niveaux précédents (`nom`, `pointsDeVie`, `force`, `arme`, `utiliserArme`, `attaquer`, etc.), en plus des siennes.

##  Votre classe `Paladin` doit avoir en plus :

### Propriétés :
- **pouvoirSoin** : _number_
  → le nombre de points de vie rendus lors d'un soin.

##  Méthodes :

###  soigner
Fonction qui :
- prend en paramètre une **cible**
- augmente **pointsDeVie** de la cible selon **pouvoirSoin**
- empêche **pointsDeVie** de la cible de dépasser `100`

---

##  Bonus : Classe `Archer` (hérite de `Personnage`)

```javascript
class Archer extends Personnage {
  constructor(nom, pointsDeVie, force, nombreDeFleches) {
  }
}
```

##  Votre classe `Archer` doit avoir en plus :

### Propriétés :
- **nombreDeFleches** : _number_
  → le nombre de flèches restantes.

##  Méthodes :

###  tirer
Fonction qui :
- prend en paramètre une cible
- vérifie d'abord si nombreDeFleches === 0
- si c'est le cas, retourne "N'a plus de flèches !" et ne fait aucun dégât
- sinon diminue nombreDeFleches de 1
- inflige les dégâts (force) à la cible
###  attaquer (redéfinie)
- doit **redéfinir** `attaquer` pour qu'il appelle `tirer` au lieu du comportement de base

---

