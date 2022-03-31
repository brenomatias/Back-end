module.exports = (sequelize) => {
  
    const PostCategory = sequelize.define('PostCategory',
      {}, { timestamps: false, tableName: 'PostsCategories' });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogposts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });

      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    };
    return PostCategory;
  };