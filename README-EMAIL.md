# Configuration EmailJS - Formulaire de Contact

## 🚀 Installation

L'envoi d'emails se fait maintenant entièrement depuis le frontend avec **EmailJS** - aucun backend nécessaire !

## 📋 Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (200 emails/mois)
3. Connectez-vous au [Dashboard](https://dashboard.emailjs.com/)

### 2. Ajouter un service email

1. Dans le dashboard, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Suivez les instructions de connexion
5. **Copiez le Service ID** qui s'affiche

### 3. Créer un template d'email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce contenu pour le template :

**Subject:**

```
[Portfolio] {{subject}}
```

**Content (HTML):**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2
    style="color: #81c784; border-bottom: 2px solid #81c784; padding-bottom: 10px;"
  >
    Nouveau message depuis votre portfolio
  </h2>
  <div
    style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;"
  >
    <p><strong>Nom :</strong> {{from_name}}</p>
    <p>
      <strong>Email :</strong>
      <a href="mailto:{{from_email}}">{{from_email}}</a>
    </p>
    <p><strong>Sujet :</strong> {{subject}}</p>
  </div>
  <div
    style="padding: 20px; background-color: white; border-left: 4px solid #81c784; margin: 20px 0;"
  >
    <h3 style="color: #333; margin-top: 0;">Message :</h3>
    <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">
      {{message}}
    </p>
  </div>
  <div
    style="text-align: center; color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;"
  >
    <p>Message envoyé depuis florent-dubut.fr</p>
  </div>
</div>
```

4. **Testez le template** avec le bouton "Test it"
5. **Copiez le Template ID**

### 4. Récupérer la Public Key

1. Allez dans **Account** > **General**
2. Copiez votre **Public Key**

### 5. Configurer les variables d'environnement

1. Créez un fichier `.env.local` à la racine du projet :

   ```bash
   cp .env.example .env.local
   ```

2. Remplissez avec vos identifiants :
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

## 🎯 Utilisation

### En développement

```bash
npm run dev
```

Le formulaire de contact enverra maintenant les emails via EmailJS !

### En production

Les variables d'environnement doivent être configurées dans votre hébergeur :

**Netlify / Vercel:**

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## ✅ Test

1. Remplissez le formulaire de contact
2. Cliquez sur "Envoyer"
3. Vous devriez voir une notification de succès
4. Vérifiez votre boîte email

## 🔧 Dépannage

### Les emails ne sont pas envoyés

- Vérifiez que vos identifiants sont corrects dans `.env.local`
- Vérifiez que le service EmailJS est bien connecté
- Regardez la console du navigateur pour les erreurs
- Vérifiez votre quota EmailJS (200 emails/mois gratuit)

### Les emails arrivent dans les spams

- Configurez SPF/DKIM dans EmailJS
- Utilisez un domaine personnalisé
- Testez avec différents fournisseurs

## 📊 Limite gratuite

EmailJS offre **200 emails par mois** gratuitement. Pour plus :

- **Personal**: 1000 emails/mois - $15/mois
- **Professional**: 10000 emails/mois - $70/mois

## 🔒 Sécurité

✅ **Avantages de cette approche:**

- Pas de backend à sécuriser
- Pas de credentials SMTP exposés
- Public Key peut être publique
- EmailJS gère l'anti-spam et les limites de taux

⚠️ **À ne pas oublier:**

- Ne commitez JAMAIS le fichier `.env.local` (déjà dans `.gitignore`)
- Activez le CAPTCHA dans EmailJS si vous avez du spam
- Surveillez votre quota mensuel

## 🌐 Déploiement

Votre site est maintenant **100% frontend** et peut être déployé sur :

- **Netlify** (recommandé)
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**
- N'importe quel hébergeur statique

Aucun serveur Node.js nécessaire ! 🎉
