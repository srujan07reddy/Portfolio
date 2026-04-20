'use client';

export default function AdminPage() {
  return (
    <div id="nc-root" style={{ minHeight: '100vh' }}>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.CMS_CONFIG = {
              config_url: '/api/admin/config'
            };
          `,
        }}
      />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
      <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" async></script>
    </div>
  );
}
