using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class DocumentUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DocumentId",
                table: "DocumentItems",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsPublic",
                table: "DocumentItems",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "OwnerId",
                table: "DocumentItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_DocumentItems_DocumentId",
                table: "DocumentItems",
                column: "DocumentId");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentItems_DocumentItems_DocumentId",
                table: "DocumentItems",
                column: "DocumentId",
                principalTable: "DocumentItems",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentItems_DocumentItems_DocumentId",
                table: "DocumentItems");

            migrationBuilder.DropIndex(
                name: "IX_DocumentItems_DocumentId",
                table: "DocumentItems");

            migrationBuilder.DropColumn(
                name: "DocumentId",
                table: "DocumentItems");

            migrationBuilder.DropColumn(
                name: "IsPublic",
                table: "DocumentItems");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "DocumentItems");
        }
    }
}
