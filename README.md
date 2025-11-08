# Exercice 1 — Image responsive (portrait ↔ paysage)

Démo **HTML/CSS/JS vanilla** qui affiche automatiquement l’image *portrait* ou *paysage* selon le **ratio** (largeur/hauteur) du conteneur.  
Le changement de source est géré par `ResizeObserver` (avec *throttling* via `requestAnimationFrame`) + un **fallback** `window.resize`.

---

## 🎯 Objectif

- Afficher **portrait.png** quand la zone est plus haute que large.  
- Afficher **paysage.png** quand la zone est plus large que haute.  
- Éviter toute déformation (`object-fit: contain`).

---

## 📂 Structure
```
EXO-1/
├─ index.html
├─ styles.css
├─ script.js
├─ images/
   ├─ portrait.png
   └─ paysage.png
```

