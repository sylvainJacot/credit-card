//  String.prototype.replaceAt = function (index, replacement) {
//     return (
//       this.substring(0, index) +
//       replacement +
//       this.substring(index + replacement.length)
//     );
//   };

export const ReplaceAt = (index, replacement) => {
  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };
};
