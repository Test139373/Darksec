document.addEventListener('DOMContentLoaded', () => {
    // Load navigation with logo
    const nav = document.querySelector('nav');
    if(nav) {
        nav.innerHTML = `
            <div class="container">
                <div class="logo">DarkSec</div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="blog-list.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        `;
    }

    // Blog data with cyber security topics
    const blogPosts = [
        {
            id: 1,
            title: "Advanced Threat Detection Techniques",
            content: `<p>In today's evolving threat landscape...</p>
                     <pre class="code-snippet">
                        <code>
// Example intrusion detection snippet
function monitorNetwork() {
    const anomalies = detectAnomalies(packetFlow);
    if(anomalies.length > 0) {
        triggerAlert();
    }
}
                        </code>
                     </pre>`,
            date: "2023-08-01",
            tags: ["Threat Detection", "Network Security"]
        },
        {
            id: 2,
            title: "Zero-Day Exploit Prevention",
            content: "<p>Understanding zero-day vulnerabilities...</p>",
            date: "2023-08-02",
            tags: ["Exploits", "Prevention"]
        }
    ];

    // Load blog list with cyber styling
    const blogList = document.querySelector('.blog-list');
    if(blogList) {
        blogPosts.forEach(post => {
            const blogItem = document.createElement('article');
            blogItem.className = 'blog-item';
            blogItem.innerHTML = `
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <div class="tags">
                        ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                    </div>
                </div>
                <a href="blog-post.html?id=${post.id}" class="cyber-link">Read More →</a>
            `;
            blogList.appendChild(blogItem);
        });
    }

    // Load single blog post with code styling
    const blogPostContainer = document.querySelector('.blog-post');
    if(blogPostContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        const post = blogPosts.find(p => p.id === postId);
        
        if(post) {
            blogPostContainer.innerHTML = `
                <div class="post-header">
                    <h1>${post.title}</h1>
                    <div class="post-meta">
                        <span class="post-date">${post.date}</span>
                        <div class="tags">
                            ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
                <a href="blog-list.html" class="cyber-button">← Back to Blog</a>
            `;
            
            // Add syntax highlighting
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        } else {
            blogPostContainer.innerHTML = `<h1>Post not found</h1>`;
        }
    }

    // Add terminal cursor effect to code blocks
    document.querySelectorAll('code').forEach(codeBlock => {
        codeBlock.innerHTML += '<span class="terminal-cursor">_</span>';
    });
});
