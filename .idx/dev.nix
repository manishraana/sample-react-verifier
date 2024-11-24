{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_18
    pkgs.yarn
    pkgs.gh
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
    "mhutchie.git-graph"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "start"
        ];
        env = {
          PORT = "$PORT";
        };
        manager = "web";
      };
    };
  };
}